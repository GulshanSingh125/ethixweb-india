// Automated API Route Validation and Security Check
import http from "node:http";

const PORT = process.env.TEST_PORT || "3000";
const BASE_URL = `http://localhost:${PORT}`;

async function runTests() {
  console.log("=== STARTING API VALIDATION & SECURITY CHECKS ===");
  let passed = 0;
  let failed = 0;

  async function testCase(name, fn) {
    try {
      await fn();
      console.log(`[PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`[FAIL] ${name}:`, err.message);
      failed++;
    }
  }

  // Test 1: GET /api/leads without authentication should return 401
  await testCase("Unauthenticated GET /api/leads returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/leads`);
    if (res.status !== 401) {
      throw new Error(`Expected 401, got ${res.status}`);
    }
    const data = await res.json();
    if (!data.error || !data.error.includes("Unauthorized")) {
      throw new Error(`Expected Unauthorized error message, got: ${JSON.stringify(data)}`);
    }
  });

  // Test 2: PATCH /api/leads/[id] without authentication returns 401
  await testCase("Unauthenticated PATCH /api/leads/123 returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/leads/123`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "contacted" }),
    });
    if (res.status !== 401) {
      throw new Error(`Expected 401, got ${res.status}`);
    }
  });

  // Test 3: POST /api/leads with empty body returns 400
  await testCase("POST /api/leads with empty body returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    if (res.status !== 400) {
      throw new Error(`Expected 400, got ${res.status}`);
    }
    const data = await res.json();
    if (!data.details?.name || !data.details?.email || !data.details?.service || !data.details?.message) {
      throw new Error(`Missing expected field validation errors: ${JSON.stringify(data)}`);
    }
  });

  // Test 4: POST /api/leads with invalid email returns 400
  await testCase("POST /api/leads with invalid email returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "notanemail",
        service: "web-development",
        message: "This is a legitimate test message for validation.",
      }),
    });
    if (res.status !== 400) {
      throw new Error(`Expected 400, got ${res.status}`);
    }
    const data = await res.json();
    if (!data.details?.email) {
      throw new Error(`Expected email validation error, got: ${JSON.stringify(data)}`);
    }
  });

  // Test 5: POST /api/leads with honeypot filled returns 200 silently (bot trap)
  await testCase("POST /api/leads with honeypot returns 200 silently", async () => {
    const res = await fetch(`${BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Bot Spammer",
        email: "bot@spam.com",
        service: "web-development",
        message: "Spam content",
        honeypot: "http://spamlink.com",
      }),
    });
    if (res.status !== 200) {
      throw new Error(`Expected 200 bot trap, got ${res.status}`);
    }
  });

  // Test 6: Verify Public Pages return 200 OK
  await testCase("Homepage returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await testCase("Services page returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/services`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await testCase("About page returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/about`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await testCase("Contact page returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/contact`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await testCase("Admin login page returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/admin/login`);
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  console.log(`\n=== TEST RESULTS: ${passed} PASSED, ${failed} FAILED ===`);
  if (failed > 0) process.exit(1);
}

runTests();

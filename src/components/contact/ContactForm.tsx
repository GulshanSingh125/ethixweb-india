"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/lib/types";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  general?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    honeypot: "", // hidden field for spam bots
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = SERVICE_OPTIONS.find((s) => s.value === preselectedService);
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.value }));
      }
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Business email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service of interest.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or enquiry.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    } else if (formData.message.length > 2000) {
      newErrors.message = "Message cannot exceed 2000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot detection via honeypot
    if (formData.honeypot) {
      // Silently pretend to submit to fool bots
      setIsSuccess(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setErrors({
        general:
          err.message ||
          "An unexpected error occurred. Please contact us directly at info@ethixweb.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl border border-cream-300 p-8 sm:p-12 text-center space-y-6 shadow-editorial animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-charcoal">
            Thank you for reaching out!
          </h3>
          <p className="text-charcoal-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Your enquiry has been securely received by our engineering team. A senior strategist will review your requirements and respond within 24 hours.
          </p>
        </div>
        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => setIsSuccess(false)}
          >
            <span>Submit Another Enquiry</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-cream-300 p-8 sm:p-10 shadow-editorial space-y-6"
    >
      {/* Bot Honeypot field (hidden from real users) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_url_hp">Leave this field blank</label>
        <input
          id="website_url_hp"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* General Error Banner */}
      {errors.general && (
        <div
          role="alert"
          className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-sm"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-brand-red" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold mb-2"
          >
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Vikram Malhotra"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
              errors.name ? "border-brand-red" : "border-cream-300"
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-brand-red mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold mb-2"
          >
            Business Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all ${
              errors.email ? "border-brand-red" : "border-cream-300"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-brand-red mt-1.5">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company and Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold mb-2"
          >
            Company / Organization{" "}
            <span className="text-charcoal-400 font-normal">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Enterprises"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-cream-300 text-sm text-charcoal bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold mb-2"
          >
            Primary Service Needed <span className="text-brand-red">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all cursor-pointer ${
              errors.service ? "border-brand-red" : "border-cream-300"
            }`}
          >
            <option value="" disabled>
              Select a service area...
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="text-xs text-brand-red mt-1.5">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold"
          >
            Project Overview & Goals <span className="text-brand-red">*</span>
          </label>
          <span className="text-xs text-charcoal-400 font-mono">
            {formData.message.length} / 2000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe what you are looking to build or optimize, timeline expectations, or any existing system challenges..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-charcoal bg-cream-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all resize-y ${
            errors.message ? "border-brand-red" : "border-cream-300"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-brand-red mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          <span>Send Project Enquiry</span>
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <p className="text-[11px] text-charcoal-500 pt-2 border-t border-cream-200">
        By submitting, you agree to our confidential handling of your project specs. We sign NDAs upon request and never share your data.
      </p>
    </form>
  );
}

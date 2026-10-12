"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, RotateCcw } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!validate()) {
      return;
    }

    setIsPending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/imvpankaj@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()} [pankaj.life]`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setStatus({
          type: "success",
          message:
            "Thank you for reaching out! Your message was delivered directly to Pankaj (imvpankaj@gmail.com). I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFieldErrors({});
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Unable to deliver message at this moment. You can still reach out directly via email below.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error occurred. Please try again or reach out directly via email below.",
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleReset = () => {
    setStatus({ type: null, message: "" });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFieldErrors({});
  };

  if (status.type === "success") {
    return (
      <div className="space-y-5 p-8 rounded-2xl bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-[var(--theme-text)] tracking-tight">
            Message Sent Successfully!
          </h4>
          <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed max-w-md mx-auto">
            {status.message}
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Error Banner with Direct Email Fallback */}
      {status.type === "error" && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-[var(--theme-text)] space-y-3"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-sm font-medium leading-relaxed text-rose-200">
              {status.message}
            </p>
          </div>
          <div className="pt-1">
            <a
              href={`mailto:imvpankaj@gmail.com?subject=${encodeURIComponent(
                formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
              )}&body=${encodeURIComponent(formData.message || "")}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-rose-600/30 hover:bg-rose-600/40 border border-rose-500/40 text-rose-100 text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Send directly via email to imvpankaj@gmail.com
            </a>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Your Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, name: e.target.value }));
            if (fieldErrors.name) {
              setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          placeholder="e.g. Alex Rivera"
          className={`w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none transition-colors text-sm ${
            fieldErrors.name
              ? "border-rose-500/80 focus:border-rose-500"
              : "border-[var(--theme-card-border)] focus:border-[var(--theme-card-hover)]"
          }`}
        />
        {fieldErrors.name && (
          <p className="text-xs text-rose-400 mt-1.5 font-medium">{fieldErrors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Your Email Address <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
            if (fieldErrors.email) {
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          placeholder="you@domain.com"
          className={`w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none transition-colors text-sm ${
            fieldErrors.email
              ? "border-rose-500/80 focus:border-rose-500"
              : "border-[var(--theme-card-border)] focus:border-[var(--theme-card-hover)]"
          }`}
        />
        {fieldErrors.email && (
          <p className="text-xs text-rose-400 mt-1.5 font-medium">{fieldErrors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, subject: e.target.value }))
          }
          placeholder="Collaboration, inquiry, or question"
          className="w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-card-hover)] transition-colors text-sm"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, message: e.target.value }));
            if (fieldErrors.message) {
              setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }
          }}
          placeholder="Share your thoughts, inquiry, or project proposal..."
          className={`w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none transition-colors text-sm resize-y ${
            fieldErrors.message
              ? "border-rose-500/80 focus:border-rose-500"
              : "border-[var(--theme-card-border)] focus:border-[var(--theme-card-hover)]"
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 mt-1.5 font-medium">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3.5 px-6 rounded-lg bg-[var(--theme-btn-bg)] text-[var(--theme-btn-text)] font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 shadow-md cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[var(--theme-btn-text)]" />
            <span className="text-[var(--theme-btn-text)]">Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[var(--theme-btn-text)]" />
            <span className="text-[var(--theme-btn-text)]">Send Message</span>
          </>
        )}
      </button>

      <p className="text-xs text-center text-[var(--theme-text-muted)] font-mono">
        Delivered directly to Pankaj Verma (imvpankaj@gmail.com).
      </p>
    </form>
  );
}

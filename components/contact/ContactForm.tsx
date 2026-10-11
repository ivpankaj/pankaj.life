"use client";

import React, { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactMessage, ContactActionResult } from "@/app/actions/contact";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactActionResult | null, FormData>(
    submitContactMessage,
    null
  );

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field for bot prevention */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_bot_trap">Do not fill this out</label>
        <input
          type="text"
          id="website_bot_trap"
          name="website_bot_trap"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Success Notification */}
      {state?.success && (
        <div
          role="status"
          className="p-4 rounded-xl bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-[var(--theme-text)] shrink-0 mt-0.5" />
          <p className="text-sm font-medium leading-relaxed text-[var(--theme-text)]">{state.message}</p>
        </div>
      )}

      {/* Error Notification */}
      {state && !state.success && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[var(--theme-text)] shrink-0 mt-0.5" />
          <p className="text-sm font-medium leading-relaxed text-[var(--theme-text)]">{state.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Your Name <span className="text-[var(--theme-text)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="e.g. Alex Rivera"
          className="w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-card-hover)] transition-colors text-sm"
        />
        {state?.fieldErrors?.name && (
          <p className="text-xs text-[var(--theme-text)] mt-1.5 font-medium">{state.fieldErrors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text)] mb-2 font-mono"
        >
          Your Email Address <span className="text-[var(--theme-text)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@domain.com"
          className="w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-card-hover)] transition-colors text-sm"
        />
        {state?.fieldErrors?.email && (
          <p className="text-xs text-[var(--theme-text)] mt-1.5 font-medium">{state.fieldErrors.email}</p>
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
          Message <span className="text-[var(--theme-text)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share your thoughts, inquiry, or project proposal..."
          className="w-full px-4 py-3 rounded-lg bg-[var(--theme-subtle-bg)] border border-[var(--theme-card-border)] text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-card-hover)] transition-colors text-sm resize-y"
        />
        {state?.fieldErrors?.message && (
          <p className="text-xs text-[var(--theme-text)] mt-1.5 font-medium">{state.fieldErrors.message}</p>
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
        Messages are delivered securely to Pankaj Verma.
      </p>
    </form>
  );
}

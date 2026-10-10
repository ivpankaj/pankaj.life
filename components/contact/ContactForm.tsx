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
      {/* Honeypot field hidden from users for bot prevention */}
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
          className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 flex items-start gap-3 animate-in fade-in"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{state.message}</p>
        </div>
      )}

      {/* Error Notification */}
      {state && !state.success && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-200 flex items-start gap-3 animate-in fade-in"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{state.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
        >
          Your Name <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="e.g. Alex Rivera"
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-400 transition-all text-sm"
        />
        {state?.fieldErrors?.name && (
          <p className="text-xs text-rose-400 mt-1.5">{state.fieldErrors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
        >
          Your Email Address <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@domain.com"
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-400 transition-all text-sm"
        />
        {state?.fieldErrors?.email && (
          <p className="text-xs text-rose-400 mt-1.5">{state.fieldErrors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Collaboration, inquiry, or question"
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-400 transition-all text-sm"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
        >
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share your thoughts, project inquiry, or message..."
          className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-400 transition-all text-sm resize-y"
        />
        {state?.fieldErrors?.message && (
          <p className="text-xs text-rose-400 mt-1.5">{state.fieldErrors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="pixar-button w-full py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Transmit Message</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400 font-mono">
        Your email is kept confidential. Messages go directly to Pankaj Verma.
      </p>
    </form>
  );
}

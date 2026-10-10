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
          className="p-4 rounded-3xl bg-emerald-500/20 border-3 border-emerald-400 text-emerald-100 flex items-start gap-3 shadow-lg"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-sm font-bold font-cartoon leading-relaxed">{state.message}</p>
        </div>
      )}

      {/* Error Notification */}
      {state && !state.success && (
        <div
          role="alert"
          className="p-4 rounded-3xl bg-rose-500/20 border-3 border-rose-400 text-rose-100 flex items-start gap-3 shadow-lg"
        >
          <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
          <p className="text-sm font-bold font-cartoon leading-relaxed">{state.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-black font-cartoon uppercase tracking-wider text-amber-300 mb-2"
        >
          Your Name <span className="text-pink-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="e.g. Alex Rivera"
          className="w-full px-5 py-3.5 rounded-2xl bg-[#0c1438] border-2 border-[#3b4c96] border-b-4 border-b-[#141b44] text-white font-medium placeholder-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 transition-all text-sm"
        />
        {state?.fieldErrors?.name && (
          <p className="text-xs text-rose-400 font-bold font-cartoon mt-1.5">{state.fieldErrors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-black font-cartoon uppercase tracking-wider text-amber-300 mb-2"
        >
          Your Email Address <span className="text-pink-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@domain.com"
          className="w-full px-5 py-3.5 rounded-2xl bg-[#0c1438] border-2 border-[#3b4c96] border-b-4 border-b-[#141b44] text-white font-medium placeholder-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 transition-all text-sm"
        />
        {state?.fieldErrors?.email && (
          <p className="text-xs text-rose-400 font-bold font-cartoon mt-1.5">{state.fieldErrors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-black font-cartoon uppercase tracking-wider text-amber-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Collaboration, inquiry, or question"
          className="w-full px-5 py-3.5 rounded-2xl bg-[#0c1438] border-2 border-[#3b4c96] border-b-4 border-b-[#141b44] text-white font-medium placeholder-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 transition-all text-sm"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-black font-cartoon uppercase tracking-wider text-amber-300 mb-2"
        >
          Message <span className="text-pink-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share your thoughts, project inquiry, or message..."
          className="w-full px-5 py-3.5 rounded-2xl bg-[#0c1438] border-2 border-[#3b4c96] border-b-4 border-b-[#141b44] text-white font-medium placeholder-slate-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 transition-all text-sm resize-y"
        />
        {state?.fieldErrors?.message && (
          <p className="text-xs text-rose-400 font-bold font-cartoon mt-1.5">{state.fieldErrors.message}</p>
        )}
      </div>

      {/* 3D Push Button */}
      <button
        type="submit"
        disabled={isPending}
        className="pixar-btn-primary w-full py-4 text-base font-black text-white shadow-xl disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            <span>Transmit Message 🚀</span>
          </>
        )}
      </button>

      <p className="text-xs text-center text-indigo-300 font-cartoon font-bold">
        Your email is kept confidential. Messages go directly to Pankaj Verma.
      </p>
    </form>
  );
}

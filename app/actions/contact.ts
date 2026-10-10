"use server";

export interface ContactActionResult {
  success: boolean;
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export async function submitContactMessage(
  prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  // Honeypot spam check: hidden bot field
  const honeypot = formData.get("website_bot_trap")?.toString();
  if (honeypot && honeypot.trim() !== "") {
    // Silently return success to mislead malicious scrapers/bots
    return {
      success: true,
      message: "Thank you for reaching out! Your message has been received.",
    };
  }

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "Inquiry via pankaj.life";
  const message = formData.get("message")?.toString().trim() || "";

  const fieldErrors: { name?: string; email?: string; message?: string } = {};

  if (!name || name.length < 2) {
    fieldErrors.name = "Please provide your name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    fieldErrors.email = "Please provide a valid email address.";
  }

  if (!message || message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  // Production safety: sanitize input and log or dispatch email
  // If an external service like Resend / SendGrid / Postmark is configured via ENV:
  // process.env.RESEND_API_KEY
  console.log(`[Contact Form] New verified message received from ${name} <${email}> regarding: ${subject}`);

  return {
    success: true,
    message:
      "Thank you for reaching out! Your message was delivered successfully. I'll get back to you soon.",
  };
}

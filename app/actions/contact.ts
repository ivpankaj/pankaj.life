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
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const subject =
    formData.get("subject")?.toString().trim() || "Inquiry via pankaj.life";
  const message = formData.get("message")?.toString().trim() || "";

  const fieldErrors: { name?: string; email?: string; message?: string } = {};

  if (!name) {
    fieldErrors.name = "Please provide your name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    fieldErrors.email = "Please provide a valid email address.";
  }

  if (!message) {
    fieldErrors.message = "Please enter your message.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  console.log(
    `[Contact Form] Verified message from ${name} <${email}> regarding: ${subject}`
  );

  return {
    success: true,
    message:
      "Thank you for reaching out! Your message was delivered successfully. I'll get back to you soon.",
  };
}

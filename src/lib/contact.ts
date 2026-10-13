import { portfolio } from "@/data/portfolio";

export type ContactInquiry = { name: string; email: string; message: string; website: string; url: string };
export const contactEndpoint = `https://formsubmit.co/ajax/${portfolio.email}`;

export async function sendContactInquiry(inquiry: ContactInquiry, signal: AbortSignal) {
  const name = inquiry.name.trim();
  const email = inquiry.email.trim();
  const message = inquiry.message.trim();
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 5000) {
    throw new Error("Please enter your name, a valid email, and your project details.");
  }
  if (inquiry.website) throw new Error("Unable to submit this request. Please use the contact links above.");
  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    signal,
    body: JSON.stringify({
      name, email, message,
      _replyto: email,
      _subject: `New project inquiry for ${portfolio.name}`,
      _template: "table",
      _honey: "",
      _url: inquiry.url,
    }),
  });
  if (!response.ok) throw new Error("Your message could not be submitted. Please try again or use the contact links above.");
  let result: unknown;
  try { result = await response.json(); }
  catch { throw new Error("The email service did not confirm your submission. Please try again."); }
  if (!result || typeof result !== "object") throw new Error("The email service did not confirm your submission. Please try again.");
  const data = result as { success?: unknown; message?: unknown };
  const activation = typeof data.message === "string" && /activat|confirm.*email|verif.*email|check.*email.*confirm/i.test(data.message);
  if (activation) return "activation" as const;
  if (data.success !== true && data.success !== "true") throw new Error("Your message could not be submitted. Please try again or use the contact links above.");
  return "submitted" as const;
}

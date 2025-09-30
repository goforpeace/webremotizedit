
"use server";

import { prefillContactForm, type PrefillContactFormInput } from "@/ai/flows/prefill-contact-form";

export async function handlePrefill(data: PrefillContactFormInput) {
  try {
    const result = await prefillContactForm(data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Prefill error:", error);
    return { success: false, error: "Failed to prefill form." };
  }
}

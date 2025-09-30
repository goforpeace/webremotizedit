'use server';

/**
 * @fileOverview AI-powered contact form prefill flow.
 *
 * - prefillContactForm - A function that prefills contact form fields based on the user's email.
 * - PrefillContactFormInput - The input type for the prefillContactForm function.
 * - PrefillContactFormOutput - The return type for the prefillContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrefillContactFormInputSchema = z.object({
  email: z.string().email().describe('The user\'s email address.'),
});
export type PrefillContactFormInput = z.infer<typeof PrefillContactFormInputSchema>;

const PrefillContactFormOutputSchema = z.object({
  companyName: z.string().describe('The name of the company associated with the email address.').optional(),
  jobTitle: z.string().describe('The job title of the person associated with the email address.').optional(),
});
export type PrefillContactFormOutput = z.infer<typeof PrefillContactFormOutputSchema>;

export async function prefillContactForm(input: PrefillContactFormInput): Promise<PrefillContactFormOutput> {
  return prefillContactFormFlow(input);
}

const prefillContactFormPrompt = ai.definePrompt({
  name: 'prefillContactFormPrompt',
  input: {schema: PrefillContactFormInputSchema},
  output: {schema: PrefillContactFormOutputSchema},
  prompt: `Given the following email address, extract the company name and job title, if available. If the information is not available, leave the corresponding output field blank.\n\nEmail: {{{email}}}`,
});

const prefillContactFormFlow = ai.defineFlow(
  {
    name: 'prefillContactFormFlow',
    inputSchema: PrefillContactFormInputSchema,
    outputSchema: PrefillContactFormOutputSchema,
  },
  async input => {
    const {output} = await prefillContactFormPrompt(input);
    return output!;
  }
);

import type { FormData } from '@/lib/schemas/contact-schema';

export async function sendEmail(data: FormData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error ?? 'Failed to send your enquiry.');
  }

  return result;
}

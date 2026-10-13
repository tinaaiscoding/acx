
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { contactSchema } from '@/lib/schemas/contact-schema';

export async function POST(request: Request) {
  // Handle invalid JSON.
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Validate again on the server.
  const validation = contactSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        error: 'Please check your details and try again.',
        fieldErrors: validation.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // Check that email configuration exists.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error('Contact email environment variables are missing.');

    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { name, company, email, enquiryType, message } =
    validation.data;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `${enquiryType} - ${company}`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Enquiry type: ${enquiryType}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend email error:', error);

      return NextResponse.json(
        { error: 'Unable to send your enquiry. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Your enquiry has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact endpoint error:', error);

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
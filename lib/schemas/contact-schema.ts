
import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(100, 'Name must be 100 characters or fewer.'),

  company: z
    .string()
    .trim()
    .min(1, 'Please enter your company name.')
    .max(150, 'Company name must be 150 characters or fewer.'),

  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.')
    .max(254, 'Email address is too long.'),

  enquiryType: z.enum(
    ['greenPower', 'carbonOffset', 'other'],
    {
      error: 'Please select an enquiry type.',
    }
  ),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters.')
    .max(5000, 'Message must be 5000 characters or fewer.'),
});

export type FormData = z.infer<typeof contactSchema>;
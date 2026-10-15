'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { type FormData, contactSchema } from '@/lib/schemas/contact-schema';
import { sendEmail } from '@/utils/send-email';

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: FormData) {
    setStatusMessage('');

    try {
      await sendEmail(data);
      setIsSuccess(true);
      setStatusMessage('Thanks! Your enquiry has been sent.');
      reset();
    } catch {
      setIsSuccess(false);
      setStatusMessage('Sorry, something went wrong. Please try again.');
    }
  }

  return (
    <div className='bg-brand-light rounded-main py-fl-2.5 px-fl-2.5 flex h-full flex-1 flex-col justify-center gap-(--size--2-5rem)'>
      <div>
        <p className='u-text-style-h4 text-center'>
          Tell us about your sustainability goals.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='h-full' noValidate>
        <div className='flex h-full flex-col gap-(--size--2-5rem)'>
          <div className='flex h-full flex-col gap-(--size--1-25rem)'>
            <div className='flex gap-(--size--1-25rem)'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='u-text-style-small mb-fl-0.75'>
                  Full Name
                </label>

                <input
                  type='text'
                  id='name'
                  placeholder='Full Name'
                  className='bg-light rounded-main px-fl-1.5 py-fl-0.75'
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name')}
                />

                {errors.name && (
                  <p
                    id='name-error'
                    role='alert'
                    className='mt-fl-0.75 text-sm text-red-700'
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='company'
                  className='u-text-style-small mb-fl-0.75'
                >
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  placeholder='Company'
                  className='bg-light rounded-main px-fl-1.5 py-fl-0.75'
                  {...register('company', { required: true })}
                />

                {errors.company && (
                  <p role='alert' className='mt-fl-0.75 text-sm text-red-700'>
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='email' className='u-text-style-small mb-fl-0.75'>
                Email
              </label>
              <input
                type='text'
                id='email'
                placeholder='example@domain.com'
                className='bg-light rounded-main px-fl-1.5 py-fl-0.75'
                {...register('email', { required: true })}
              />

              {errors.email && (
                <p role='alert' className='mt-fl-0.75 text-sm text-red-700'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='enquiry-type'
                className='u-text-style-small mb-fl-0.75'
              >
                Enquiry Type
              </label>
              <select
                id='enquiry-type'
                defaultValue=''
                {...register('enquiryType', { required: true })}
                className='bg-light rounded-main px-fl-1.5 py-fl-0.75 invalid:text-[#7e8981]'
              >
                <option value='' disabled hidden>
                  Select a service
                </option>
                <option value='GreenPower' className='text-dark'>
                  GreenPower
                </option>
                <option value='Carbon Offset' className='text-dark'>
                  Carbon Offset
                </option>
                <option value='Other' className='text-dark'>
                  Other
                </option>
              </select>

              {errors.enquiryType && (
                <p role='alert' className='mt-fl-0.75 text-sm text-red-700'>
                  {errors.enquiryType.message}
                </p>
              )}
            </div>

            <div className='flex grow flex-col'>
              <label htmlFor='email' className='u-text-style-small mb-fl-0.75'>
                Message
              </label>
              <textarea
                id='message'
                placeholder='How can we help?'
                {...register('message', { required: true })}
                className='bg-light rounded-main px-fl-1.5 py-fl-0.75 grow resize-none'
              />

              {errors.message && (
                <p role='alert' className='mt-fl-0.75 text-sm text-red-700'>
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='btn-primary w-full'
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {statusMessage && (
              <p
                role='status'
                aria-live='polite'
                className={`${isSuccess ? 'text-dark' : 'text-red-700'} mt-fl-1 text-center`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

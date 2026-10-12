'use client';

import { useForm } from 'react-hook-form';

import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  company: string;
  email: string;
  enquiryType: 'greenPower' | 'carbonOffset' | 'other';
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div className='bg-brand-light rounded-main py-fl-2.5 px-fl-2.5 flex h-full flex-1 flex-col justify-center gap-(--size--2-5rem)'>
      <div>
        <p className='u-text-style-h4 text-center'>
          Tell us about your sustainability goals.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='h-full'>
        <div className='flex h-full flex-col gap-(--size--2-5rem)'>
          <div className='flex h-full flex-col gap-(--size--1-25rem)'>
            <div className='flex gap-(--size--1-25rem)'>
              <div>
                <label htmlFor='name' className='u-text-style-small mb-fl-0.75'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Full Name'
                  className='bg-light rounded-main px-fl-1.5 py-fl-0.75'
                  {...register('name', { required: true })}
                />
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
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='enquiry-type'
                className='u-text-style-small mb-fl-0.75'
              >
                Enquiry Type
              </label>
              <select
                required
                id='enquiry-type'
                defaultValue=''
                {...register('enquiryType', { required: true })}
                className='bg-light rounded-main px-fl-1.5 py-fl-0.75 invalid:text-[#7e8981]'
              >
                <option value='' disabled hidden>
                  Select a service
                </option>
                <option value='greenPower' className='text-dark'>
                  GreenPower
                </option>
                <option value='carbonOffset' className='text-dark'>
                  Carbon Offset
                </option>
                <option value='other' className='text-dark'>
                  Other
                </option>
              </select>
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
            </div>
          </div>

          <div>
            <button className='btn-primary w-full'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

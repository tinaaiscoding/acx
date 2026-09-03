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
          <div className='flex h-full flex-col gap-5'>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-2.5'>
                <label htmlFor='name' className='u-text-style-small'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Full Name'
                  className='bg-light rounded-main px-6 py-3'
                  {...register('name', { required: true })}
                />
              </div>

              <div className='flex flex-col gap-2.5'>
                <label htmlFor='company' className='u-text-style-small'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  placeholder='Company'
                  className='bg-light rounded-main px-6 py-3'
                  {...register('company', { required: true })}
                />
              </div>
            </div>

            <div className='flex flex-col gap-2.5'>
              <label htmlFor='email' className='u-text-style-small'>
                Email
              </label>
              <input
                type='text'
                id='email'
                placeholder='example@domain.com'
                className='bg-light rounded-main px-6 py-3'
                {...register('email', { required: true })}
              />
            </div>

            <div className='flex flex-col gap-2.5'>
              <label htmlFor='enquiry-type' className='u-text-style-small'>
                Enquiry Type
              </label>
              <select
                required
                id='enquiry-type'
                defaultValue=''
                {...register('enquiryType', { required: true })}
                className='bg-light rounded-main px-6 py-3 invalid:text-[#7e8981]'
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

            <div className='flex grow flex-col gap-2.5'>
              <label htmlFor='email' className='u-text-style-small'>
                Message
              </label>
              <textarea
                id='message'
                placeholder='How can we help?'
                {...register('message', { required: true })}
                className='bg-light rounded-main grow resize-none px-6 py-3'
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

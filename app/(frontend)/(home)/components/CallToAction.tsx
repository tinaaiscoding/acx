import Image from 'next/image';
import SmoothScrollButton from '@/components/SmoothScrollButton';

import bgImage from '@/public/images/home-cta.jpg';

const CallToAction = () => {
  return (
    <section id='home-call-to-action' className='relative'>
      <div className='absolute inset-x-0 top-0 -z-10 min-h-full'>
        <div className='absolute inset-0 z-1 bg-gradient-to-t from-[#09211B] from-[50%] to-[#034F3A]/[13%] to-[100%] opacity-[68%]'></div>
        <Image
          src={bgImage}
          alt='three windmills in an open, yellow flower field'
          placeholder='blur'
          quality={75}
          fill
          sizes='100vw'
          className='object-cover'
        />
      </div>

      <div
        id='home-call-to-action-content'
        className='u-container py-section-main text-light'
      >
        <div className='p-fl-5 flex flex-col items-center gap-(--size--3-5rem)'>
          <div className='flex w-[771px] flex-col gap-(--size--3-5rem) text-center'>
            <h2 className='u-text-style-h1'>
              Powering a sustainable future for your business
            </h2>
            <p>
              Whether you're looking to reduce emissions, improve energy
              efficiency or accelerate your sustainability goals, our experts
              are ready to help you build a cleaner, more resilient future.
            </p>
          </div>

          <SmoothScrollButton
            name=' Contact Now'
            section='contact-section'
            className='btn-secondary'
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import Image from 'next/image';

import bgImage from '@/public/images/home-cta.jpg';

const CallToAction = () => {
  return (
    <section className='relative'>
      <div className='absolute inset-x-0 top-0 -z-10 min-h-full'>
        <div className='absolute inset-0 z-1 bg-gradient-to-t from-[#09211B] from-[50%] to-[#034F3A]/[13%] to-[100%] opacity-[68%]'></div>
        <Image
          src={bgImage}
          alt='three windmills in an open, yellow flower field'
          placeholder='blur'
          quality={100}
          fill
          sizes='100vw'
          className='object-cover'
          
        />
      </div>

      <div className='u-container py-section-main'>
        <div className='flex flex-col items-center gap-(--size--3-5rem) p-fl-5'>
          <div className='flex w-[771px] flex-col gap-(--size--2rem) text-center'>
            <h2 className='u-text-style-h1 text-light'>
              Powering a sustainable future for your business
            </h2>
            <p className='u-text-style-main text-light'>
              Whether you're looking to reduce emissions, improve energy
              efficiency or accelerate your sustainability goals, our experts
              are ready to help you build a cleaner, more resilient future.
            </p>
          </div>
          <button className='btn-secondary'>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

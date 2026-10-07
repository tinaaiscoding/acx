import Image from 'next/image';

import bgImage from '@/public/images/greenpower-hero.jpg';

const Hero = () => {
  return (
    <section>
      <div className='absolute inset-x-0 top-0 -z-10 min-h-[calc(100svh_*_1.20)]'>
        <Image
          src={bgImage}
          alt='three windmills in an open, yellow flower field'
          placeholder='blur'
          quality={100}
          fill
          sizes='100vw'
          className='object-cover object-[25%_13%]'
        />
      </div>

      <div className='u-container pb-section-large text-light flex min-h-[calc(100svh_*_1.20)] flex-col'>
        <div className='flex h-svh flex-col items-center justify-center gap-(--size--4-5rem) text-center'>
          <div className='w-[854px]'>
            <h1 className='u-text-style-display'>
              Decoupled. Competitive. Convenient.
            </h1>
          </div>

          <div className='w-[637px]'>
            <p>
              Embedded network customers find it particularly convenient as
              there is no need for their electricity retailer to have a specific
              GreenPower product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

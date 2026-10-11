import Image from 'next/image';

import bgImage from '@/public/images/home-hero.jpg';

const Hero = () => {
  return (
    <section id='home-hero'>
      <div id='home-hero-background' className='absolute inset-x-0 top-0 -z-10 min-h-svh'>
        <div className='absolute inset-0 z-1 bg-gradient-to-b from-[#034F3A]/13 from-[62%] to-[#09211B]/85 to-[88%]'></div>
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

      <div id='home-hero-content' className='u-container pb-section-large text-light flex min-h-svh flex-col'>
        <div className='flex grow items-end justify-between'>
          <div>
            <h1 className='u-text-style-display w-col-m-7'>
              Leading Decoupled GreenPower Solutions
            </h1>
          </div>

          <div>
            <p className='w-col-m-4'>
              Reduce compliance costs and support your sustainability goals with
              Australia's leading provider of decoupled GreenPower and
              accredited carbon offsets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

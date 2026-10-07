import Image from 'next/image';

import placeholder from '@/public/images/greenpower-source-solar.jpg';

const Sources = () => {
  return (
    <section className='bg-brand-main text-light h-[789px]'>
      <div className='u-container py-section-main h-full'>
        <div className='flex h-full gap-(--size--4rem)'>
          <div className='rounded-main relative flex-4 overflow-hidden'>
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-[#034F3A]/13 from-[62%] to-[#09211B]/85 to-[88%]'></div>
            <Image
              src={placeholder}
              alt='solar panels'
              placeholder='blur'
              quality={100}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>

          <div className='relative flex flex-5 flex-col justify-between'>
            <h2 className='u-text-style-h3 !text-wrap'>
              ACX GreenPower is sourced from wind or large scale solar
            </h2>

            <div>
              <p className='u-text-style-h4 mb-fl-2'>Solar</p>
              <p className='w-[60%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque quis blandit ante. Nullam tempor, tortor a
                molestie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sources;

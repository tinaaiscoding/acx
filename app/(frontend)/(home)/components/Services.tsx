import Image from 'next/image';

import cardImage1 from '@/public/images/home-card1.jpg';
import cardImage2 from '@/public/images/home-card2.jpg';
import cardImage3 from '@/public/images/home-card3.jpg';

const Services = () => {
  return (
    <section id='home-services'>
      <div className='u-container py-section-main'>
        <div className='flex flex-col gap-(--size--6rem)'>
          <div id='home-services-heading'>
            <h2 className='u-text-style-main mb-fl-2 uppercase'>What we do</h2>

            <p className='u-text-style-h3 !text-wrap'>
              Our tailored GreenPower and carbon offset solutions help
              organisations improve environmental performance while meeting
              compliance requirements.
            </p>
          </div>

          <div
            id='home-services-cards'
            className='text-light flex justify-between gap-(--size--1rem)'
          >
            <div className='rounded-main relative h-[494px] w-[390px] overflow-hidden'>
              <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#034F3A]/0 from-[37%] to-[#09211B]/100 to-[100%]'></div>

              <Image
                src={cardImage1}
                alt='one tree'
                placeholder='blur'
                quality={100}
                fill
                className='z-0 scale-180 object-cover object-bottom'
              />

              <div className='p-fl-2 relative z-20 flex h-full flex-col justify-end gap-(--size--1-5rem)'>
                <p className='u-text-style-h4'>Reduce Compliance Costs</p>
                <p>
                  Flexible GreenPower solutions designed to help lower the cost
                  of meeting environmental obligations.
                </p>
              </div>
            </div>

            <div className='rounded-main relative h-[494px] w-[390px] overflow-hidden'>
              <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#034F3A]/0 from-[37%] to-[#09211B]/100 to-[100%]'></div>

              <Image
                src={cardImage2}
                alt='landscape of fields'
                placeholder='blur'
                quality={100}
                fill
                className='z-0 scale-180 object-cover object-bottom'
              />

              <div className='p-fl-2 relative z-20 flex h-full flex-col justify-end gap-(--size--1-5rem)'>
                <p className='u-text-style-h4'>Meet Sustainability Goals</p>
                <p>
                  Support your organisation's environmental commitments with
                  accredited renewable energy and carbon offsets.
                </p>
              </div>
            </div>

            <div className='rounded-main relative h-[494px] w-[390px] overflow-hidden'>
              <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#034F3A]/0 from-[37%] to-[#09211B]/100 to-[100%]'></div>

              <Image
                src={cardImage3}
                alt='hands joined together holding a plant'
                placeholder='blur'
                quality={100}
                fill
                className='z-0 object-cover object-bottom'
              />

              <div className='p-fl-2 relative z-20 flex h-full flex-col justify-end gap-(--size--1-5rem)'>
                <p className='u-text-style-h4'>Dedicated Expertise</p>
                <p>
                  Work with a knowledgeable team that provides personalised
                  advice and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

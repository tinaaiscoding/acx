import Image from 'next/image';

import accreditationLogo from '@/public/images/greenpower-accreditation-logo.png';

const Process = () => {
  return (
    <section id='greenpower-process' className='bg-brand-main text-light'>
      <div className='u-container py-section-main'>
        <div className='flex flex-col gap-(--size--10rem)'>
          <div
            id='greenpower-process-heading'
            className='flex items-start justify-between gap-(--size--1rem)'
          >
            <h2 className='u-text-style-h1'>Understanding GreenPower</h2>

            <Image
              src={accreditationLogo}
              width={318}
              height={108}
              alt='GreenPower Renewable Electricity accreditation logo'
              className='h-auto w-full max-w-[318px] self-start'
            ></Image>
          </div>

          <div
            id='greenpower-process-content'
            className='flex justify-between gap-(--size--5rem)'
          >
            <div className='flex flex-1 flex-col gap-(--size--3-5rem)'>
              <div>
                <p className='u-text-style-h4 mb-fl-1'>1.</p>
                <h3 className='u-text-style-h4'>
                  Accredited Certificates Are Sourced
                </h3>
              </div>

              <p>
                Large Scale Generation Certificates (LGCs) are purchased from
                renewable energy generators accredited under the national
                GreenPower program.
              </p>
            </div>

            <div className='flex flex-1 flex-col gap-(--size--3-5rem)'>
              <div>
                <p className='u-text-style-h4 mb-fl-1'>2.</p>
                <h3 className='u-text-style-h4 !text-wrap'>
                  Renewable Energy Is Supported
                </h3>
              </div>
              <p>
                Purchasing these certificates provides additional funding that
                helps renewable energy generators continue supplying electricity
                to the national grid.
              </p>
            </div>

            <div className='flex flex-1 flex-col gap-(--size--3-5rem)'>
              <div>
                <p className='u-text-style-h4 mb-fl-1'>3.</p>
                <h3 className='u-text-style-h4'>
                  Market-Based Pricing Delivers Value
                </h3>
              </div>

              <p>
                Certificate prices are determined by market forces, helping
                ensure renewable energy remains economically viable while
                delivering competitive pricing for organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

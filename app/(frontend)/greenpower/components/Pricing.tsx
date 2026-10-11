import Image from 'next/image';

import placeholder_graph_legend from '@/public/images/greenpower-pricing-graph-legend.png';
import placeholder_graph from '@/public/images/greenpower-pricing-graph.png';

const Pricing = () => {
  return (
    <section id='greenpower-pricing' className='h-[1000px]'>
      <div className='u-container py-section-main h-full'>
        <div
          id='greenpower-pricing-heading'
          className='flex h-full flex-col items-center gap-(--size--8rem)'
        >
          <div className='w-[785px] text-center'>
            <p className='mb-fl-2 uppercase'>Competitive Pricing</p>
            <h2 className='u-text-style-h1 !text-wrap'>
              Transparent, Market-Based GreenPower Pricing
            </h2>
          </div>

          <div id='greenpower-pricing-content' className='flex h-full flex-col'>
            <div className='flex h-full w-full justify-between gap-(--size--6rem)'>
              <div className='flex flex-3 flex-col justify-end gap-(--size--2rem)'>
                <p>
                  ACX GreenPower contract prices are determined by the spot
                  market and may change on an daily basis.
                </p>
                <p>
                  While spot market pricing is volatile it can be as much as 50%
                  cheaper than prices charged under standard retail contracts.
                </p>
              </div>

              <div className='relative h-full flex-5'>
                <Image
                  src={placeholder_graph}
                  alt='graph'
                  placeholder='blur'
                  quality={100}
                />
              </div>
            </div>
            <div className='mt-fl-2 flex w-[766px] flex-col items-center self-end'>
              <Image
                src={placeholder_graph_legend}
                alt='graph'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

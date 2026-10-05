const Solutions = () => {
  return (
    <section>
      <div className='u-container py-section-main'>
        <div className='flex gap-(--size--4rem)'>
          <div className='flex flex-col gap-(--size--2rem)'>
            <h2 className='u-text-style-main uppercase'>Our Solutions</h2>

            <p className='u-text-style-h1 !text-wrap'>
              Supporting Your Sustainability Journey
            </p>
          </div>

          <div className='flex flex-col gap-(--size--2-5rem)'>
            <div className='flex flex-col items-start gap-(--size--2-5rem) bg-brand-light rounded-main p-fl-2.5'>
              <div className='flex flex-col gap-(--size--1-5rem)'>
                <p className='u-text-style-h4'>
                  Discover how we help organisations transition towards cleaner
                  energy.
                </p>
                <p className='u-text-style-main'>
                  Access accredited GreenPower solutions that support renewable
                  energy generation and help organisations reduce the
                  environmental impact of their electricity usage.
                </p>
              </div>

              <button className='btn-primary'>Learn More</button>
            </div>

            <div className='flex flex-col items-start gap-(--size--2-5rem) bg-brand-light rounded-main p-fl-2.5'>
              <div className='flex flex-col gap-(--size--1-5rem)'>
                <p className='u-text-style-h4'>
                  See how leading companies are addressing their carbon impact.
                </p>
                <p className='u-text-style-main'>
                 Invest in accredited carbon offset projects from Australian and international sources to help organisations address emissions and improve environmental outcomes.
                </p>
              </div>

              <button className='btn-primary'>View Projects</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

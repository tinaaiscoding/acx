const Decoupled = () => {
  return (
    <section id='greenpower-decoupled' className='h-[872px]'>
      <div className='u-container py-section-main h-full'>
        <div className='flex h-full gap-(--size--6rem)'>
          <div
            id='greenpower-decoupled-heading'
            className='flex flex-1 flex-col justify-between'
          >
            <div>
              <p className='mb-fl-2 uppercase'>Decoupled Source</p>
              <h2 className='u-text-style-h1'>
                The Smarter Way to Source GreenPower
              </h2>
            </div>
            <p className='w-[530px]'>
              Providers such as ACX, are independent of the large electricity
              retailers and provide the GreenPower service separate from the
              standard power contract. Prices are based on the spot market which
              can be significantly cheaper and more flexible than than through a
              retail contract. This system is also more convenient in terms of
              timing as purchasing may be done in arrears or to align with a
              specific reporting period.
            </p>
          </div>

          <div
            id='greenpower-decoupled-cards'
            className='flex flex-1 flex-col justify-end'
          >
            <div className='grid grid-cols-2 gap-(--size--1-25rem)'>
              <div className='rounded-main bg-brand-light p-fl-2 flex h-[193px] flex-col justify-end'>
                <p className='u-text-style-display mb-fl-1'>34</p>
                <p>Pellentesque elefend tellus</p>
              </div>

              <div className='rounded-main bg-brand-light p-fl-2 flex h-[193px] flex-col justify-end'>
                <p className='u-text-style-display mb-fl-1'>21.4</p>
                <p>Aenean fermentum id urna</p>
              </div>

              <div className='rounded-main bg-brand-light p-fl-2 flex h-[193px] flex-col justify-end'>
                <p className='u-text-style-display mb-fl-1'>157</p>
                <p>At vero eos et accusamus</p>
              </div>

              <div className='rounded-main bg-brand-light p-fl-2 flex h-[193px] flex-col justify-end'>
                <p className='u-text-style-display mb-fl-1'>88%</p>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decoupled;

import NavigationLinks from './NavigationLinks';
import SmoothScrollButton from './SmoothScrollButton';

const NavigationBar = () => {
  return (
    <header>
      <div className='fixed inset-x-0 top-0 z-100'>
        <div className='u-container'>
          <nav className='bg-light mt-fl-2 grid w-full grid-cols-3 items-center rounded-full px-5 py-2.5'>
            <div>logo</div>

            <div className='justify-self-center text-nowrap'>
              <NavigationLinks />
            </div>

            <div className='justify-self-end'>
              <SmoothScrollButton
                name='Contact Us'
                section='contact-section'
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

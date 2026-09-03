import NavigationLinks from './NavigationLinks';
import SmoothScrollButton from './SmoothScrollButton';

const NavigationBar = () => {
  return (
    <nav className='bg-light fixed mt-7 grid w-[1328px] grid-cols-3 items-center rounded-full bg-light px-5 py-2.5'>
      <div>logo</div>

      <div className='justify-self-center'>
        <NavigationLinks />
      </div>

      <div className='justify-self-end'>
        <SmoothScrollButton name='Contact Now' section='contact-section' />
      </div>
    </nav>
  );
};

export default NavigationBar;

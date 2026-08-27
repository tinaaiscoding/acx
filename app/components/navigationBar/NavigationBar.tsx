import Link from 'next/link';

import SmoothScrollButton from '../smoothScrollButton/SmoothScrollButton';

const NavigationBar = () => {
  return (
    <nav className='fixed mx-14 mt-7 flex w-full max-w-(--container--full) items-center justify-between rounded-full bg-light px-5 py-2.5'>
      <div>logo</div>

      <div className='flex gap-10'>
        <Link href='/'>Home</Link>
        <Link href='/greenpower'>GreenPower</Link>
        <Link href='/carbonoffset'>Carbon Offset</Link>
      </div>

      <SmoothScrollButton name='Contact Now' section='#contact-section' />
    </nav>
  );
};

export default NavigationBar;

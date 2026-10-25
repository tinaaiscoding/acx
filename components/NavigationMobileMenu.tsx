import Link from 'next/link';

import SmoothScrollButton from './SmoothScrollButton';

type Props = {
  onLinkClick: () => void;
};

const NavigationMobileMenu = ({ onLinkClick }: Props) => {
  return (
    <div
      id='navigation-mobile-menu'
      className='rounded-main bg-light divide-dark-500 border-dark-faded flex flex-col divide-y-[1.5px] divide-solid overflow-hidden border'
    >
      <Link
        href='/'
        onClick={onLinkClick}
        className='px-fl-1.25 py-fl-1.5 hover:bg-brand-main hover:text-light'
      >
        Home
      </Link>

      <Link
        href='/greenpower'
        onClick={onLinkClick}
        className='px-fl-1.25 py-fl-1.5 hover:bg-brand-main hover:text-light'
      >
        GreenPower
      </Link>

      <Link
        href='/carbonoffset'
        onClick={onLinkClick}
        className='px-fl-1.25 py-fl-1.5 hover:bg-brand-main hover:text-light'
      >
        Carbon Offset
      </Link>

      <div onClick={onLinkClick}>
        <SmoothScrollButton
          name='Contact'
          section='contact-section'
          className='w-full px-fl-1.25 py-fl-1.5 hover:bg-brand-main hover:text-light text-left cursor-pointer'
        />
      </div>
    </div>
  );
};

export default NavigationMobileMenu;

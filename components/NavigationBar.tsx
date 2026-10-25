'use client';

import { Turn as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { useFooterVisibility } from '@/hooks/useFooterVisibility';
import ACXlogo from '@/public/images/acxrgyle-logo.png';

import NavigationLinks from './NavigationLinks';
import SmoothScrollButton from './SmoothScrollButton';
import NavigationMobileMenu from './footer/NavigationMobileMenu';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMobileMenuRef = useRef<HTMLDivElement>(null);
  const shouldHideNavbar = useFooterVisibility();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navMobileMenuRef.current &&
        !navMobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div id='navigation-bar' className='fixed inset-x-0 top-0 z-100'>
        <div className='u-container'>
          <nav
            className={`bg-light mt-fl-2 px-fl-1.25 py-fl-0.75 grid w-full grid-cols-3 items-center rounded-full transition-transform duration-300 ease-in-out ${
              shouldHideNavbar ? '-translate-y-[calc(100%+2rem)]' : 'translate-y-0'
            }`}
          >
            <div>
              <Image
                src={ACXlogo}
                alt='GreenPower Renewable Electricity accreditation logo'
                className='h-auto w-full max-w-[141px] self-start'
              ></Image>
            </div>

            <div className='justify-self-center text-nowrap'>
              <NavigationLinks />
            </div>

            <div className='justify-self-end'>
              <SmoothScrollButton
                name='Contact Us'
                section='contact-section'
                className='btn-transparent'
              />
            </div>
          </nav>
        </div>
      </div>

      <div
        id='navigation-bar-mobile'
        className='fixed inset-x-0 top-0 z-100 hidden'
      >
        <div className='u-container'>
          <div ref={navMobileMenuRef}>
            <nav
              className={`bg-light mt-fl-2 px-fl-1.25 py-fl-0.75 mb-fl-0.25 flex w-full items-center justify-between rounded-full transition-transform duration-300 ease-in-out ${
                shouldHideNavbar ? '-translate-y-[calc(100%+2rem)]' : 'translate-y-0'
              }`}
            >
              <div>
                <Image
                  src={ACXlogo}
                  alt='GreenPower Renewable Electricity accreditation logo'
                  className='h-auto w-full max-w-[141px] self-start'
                ></Image>
              </div>

              <div>
                <Hamburger
                  duration={0.2}
                  color='#034f3a'
                  toggled={isOpen}
                  toggle={setIsOpen}
                />
              </div>
            </nav>

            {isOpen && (
              <div>
                <NavigationMobileMenu onLinkClick={() => setIsOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

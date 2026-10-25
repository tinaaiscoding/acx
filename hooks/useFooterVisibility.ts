
'use client';

import { useEffect, useState } from 'react';

export const useFooterVisibility = () => {
  const [shouldHideNavbar, setShouldHideNavbar] = useState(false);

  useEffect(() => {
    const footerSection = document.querySelector('#contact-section');

    if (!footerSection) return;

    const getVisibleNavbar = () => {
      const desktopNavbar = document.querySelector('#navigation-bar');
      const mobileNavbar = document.querySelector('#navigation-bar-mobile');

      if (
        desktopNavbar &&
        getComputedStyle(desktopNavbar).display !== 'none'
      ) {
        return desktopNavbar;
      }

      if (
        mobileNavbar &&
        getComputedStyle(mobileNavbar).display !== 'none'
      ) {
        return mobileNavbar;
      }

      return null;
    };

    let observer: IntersectionObserver | undefined;

    const setupObserver = () => {
      observer?.disconnect();

      const navbar = getVisibleNavbar();

      if (!navbar) return;

      const navbarBottom = navbar.getBoundingClientRect().bottom;

      observer = new IntersectionObserver(
        ([entry]) => {
          setShouldHideNavbar(entry.isIntersecting);
        },
         {
          rootMargin: `0px 0px -${window.innerHeight - navbarBottom}px 0px`,
          threshold: 0,
        },
      );

      observer.observe(footerSection);
    };

    setupObserver();

    window.addEventListener('resize', setupObserver);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', setupObserver);
    };
  }, []);

  return shouldHideNavbar;
};

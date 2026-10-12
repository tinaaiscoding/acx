import NavigationLinks from '../NavigationLinks';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer id='contact-section' className='u-container h-[837px] py-fl-3.5'>
      <div className='flex h-full justify-between'>
        <div className='flex h-full flex-1 flex-col justify-between'>
          <div className='flex flex-col gap-(--size--2-5rem)'>
            <div>logo</div>

            <p>
              G.02 109 Burwood Road
              <br />
              Hawthorn VIC, 3122
              <br />
              Australia
              <br />
              03 9805 0789
              <br />
              0419 348 284
              <br />
              info@co2ex.com.au
            </p>
          </div>

          <NavigationLinks />
        </div>

        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;

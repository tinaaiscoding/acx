import ContactForm from './ContactForm';
import NavigationLinks from '../NavigationLinks';

const Footer = () => {
  return (
    <footer id='contact-section' className='h-[837px] py-14'>
      <div className='flex h-full justify-between'>
        <div className='flex h-full flex-1 flex-col justify-between'>
          <div className='flex flex-col gap-10'>
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

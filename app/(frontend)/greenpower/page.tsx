import Decoupled from './components/Decoupled';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Sources from './components/Sources';

const GreenPower = () => {
  return (
    <main id='greenpower'>
      <Hero />
      <Process />
      <Decoupled />
      <Pricing />
      <Sources />
    </main>
  );
};

export default GreenPower;

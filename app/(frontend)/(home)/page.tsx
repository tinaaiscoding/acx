import CallToAction from './components/CallToAction';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';

Hero;

const Home = () => {
  return (
    <main id='home'>
      <Hero />
      <Services />
      <Solutions />
      <CallToAction />
    </main>
  );
};

export default Home;

import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';

Hero;

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Solutions />
    </main>
  );
};

export default Home;

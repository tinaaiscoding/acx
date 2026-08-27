import Footer from '../components/footer/Footer';
import NavigationBar from '../components/navigationBar/NavigationBar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='u-container'>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

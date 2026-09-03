import Footer from '@/components/footer/Footer';
import NavigationBar from '../../components/NavigationBar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;

import NavigationBar from '../components/navigationBar/NavigationBar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
};

export default layout;

import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <div className='flex gap-10'>
      <Link href='/'>Home</Link>
      <Link href='/greenpower'>GreenPower</Link>
      <Link href='/carbonoffset'>Carbon Offset</Link>
    </div>
  );
};

export default NavigationLinks;

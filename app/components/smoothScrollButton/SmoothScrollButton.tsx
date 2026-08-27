'use client';

type Props = {
  name: string;
  section: string;
};

// Button component to scroll smoothly to section without modifying the URL

export default function SmoothScrollButton({ name, section }: Props) {
  const handleScroll = () => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className='btn-transparent rounded px-4 py-2 text-white hover:bg-blue-700'
    >
      {name}
    </button>
  );
}

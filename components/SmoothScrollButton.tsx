'use client';

type Props = {
  name: string;
  section: string;
  className: string;
};

// Button component to scroll smoothly to section without modifying the URL

export default function SmoothScrollButton({
  name,
  section,
  className,
}: Props) {
  const handleScroll = () => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleScroll} className={className}>
      {name}
    </button>
  );
}

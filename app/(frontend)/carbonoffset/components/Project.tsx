import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  grade: 'compliance grade' | 'voluntary grade';
  name: string;
  text: React.ReactNode;
};

const Project = ({ image, grade, name, text }: Props) => {
  return (
    <div className="bg-brand-light rounded-main p-fl-2.5 flex gap-(--size--2-5rem)">
      <div className="rounded-main relative h-[371px] min-w-[504px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          placeholder="blur"
          quality={100}
          fill
          className='object-cover'
        />
      </div>

      <div className="flex flex-col gap-(--size--2rem)">
        <div className="flex flex-col gap-(--size--1-5rem)">
          <p className="u-text-style-main uppercase">{grade}</p>

          <h3 className="u-text-style-h4">{name}</h3>
        </div>

        <div className='flex flex-col gap-(--size--2rem)'>{text}</div>
      </div>
    </div>
  );
};


export default Project;

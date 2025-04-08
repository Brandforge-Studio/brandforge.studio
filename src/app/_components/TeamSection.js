'use client';
import Image from 'next/image';

export default function TeamSection(props) {
  const { imagePath, name, title, description } = props;

  return (
    <section 
      className="h-fit w-full flex flex-col gap-2 items-center justify-center max-w-screen-md p-8
        md:flex-row md:items-start md:gap-8">
      <div className="flex flex-col items-center w-48">
        <Image
          src={imagePath}
          alt=" "
          height={192}
          width={192}
          blurDataURL={imagePath}
          placeholder="blur"
          priority
          className="border-8 border-violet-900 mb-2 object-cover rounded-full w-48" />
        <h3 className="text-white text-center text-xl font-semibold w-48">{name}</h3>
        <h4 className="text-white text-center text-sm font-light w-48">{title}</h4>
      </div>
      <p
        className="flex font-light h-48 items-center mb-2 text-pretty text-base text-white">
        {description}
      </p>
    </section>
  );
}
  
  
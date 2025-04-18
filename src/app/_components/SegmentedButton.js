'use client';
 
import { useState } from 'react';
import Image from 'next/image';

export default function SegmentedButton(props) {
  const { values, onChange, defaultValue, name } = props;
  const [selectedValue, setSelectedValue] = useState(defaultValue || null);

  const handleSelection = (value) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="bg-black border-purple-900 border-2 flex flex-col relative rounded-[2.3rem] w-full
      md:flex-row md:rounded-full md:before:rounded-full md:after:rounded-full
      before:content-[''] before:absolute before:inset-0 before:bg-purple-500/50 before:blur-xl before:rounded-[2.3rem] before:-z-10 before:transition-opacity before:duration-500
      after:content-[''] after:absolute after:inset-0 after:bg-purple-500/30 after:blur-xl after:rounded-[2.3rem] after:scale-105 after:-z-10 after:opacity-0"
>
      {
        values.map((value, index) => (
          <button
            key={`segmented-button-${index}`}
            type="button" 
            className={`relative flex flex-row gap-2 items-center justify-center peer font-light h-16 text-lg text-white w-full
              first:rounded-t-[2.3rem] last:rounded-b-[2.3rem]
              md:first:rounded-l-full md:last:rounded-r-full focus:outline-none
              focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-0 focus-within:shadow-[0_0_15px_rgba(168,85,247,0.5),0_0_30px_rgba(168,85,247,0.3)] focus-within:font-normal focus-within:before:opacity-80 focus-within:after:opacity-60 focus-within:after:animate-pulse transition-all duration-300
              ${selectedValue === value 
                ? 'bg-purple-900/75 hover:bg-purple-900/75  font-normal'
                : 'bg-transparent hover:bg-purple-900/25 focus-within:bg-purple-900/50 focus-within:hover:bg-purple-900/50'}`}
              onClick={() => handleSelection(value)}
          >
            <div className={`transition-opacity duration-300
              ${selectedValue === value ? 'opacity-100' : 'opacity-0'}`}>
              <Image 
                src="/check.svg" 
                alt="check" 
                width={24} 
                height={24} 
                className="brightness-0 invert"
              />
            </div>
            {value}
          </button> 
        ))
      }
    </div>
  );
}
  
  
'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavButton(props) {
  const currentPath = usePathname();
  const { label, linkedPath, solid} = props;

  return (
    <Link 
      className={`
        border-2 border-transparent flex font-sans font-light items-center justify-center py-2 px-8 text-2xl rounded-full w-fit
        transition-colors duration-300 ease-in-out
        ${solid || currentPath === linkedPath 
          ? 'bg-white/80 backdrop-blur-xs text-black'
          : 'bg-transparent text-white hover:border-white/80'}`}
      href={linkedPath}
    >
      {label}
    </Link>
  );
}
  
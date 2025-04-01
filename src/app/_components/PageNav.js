'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function PageNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-8 justify-end p-8 w-full">
      <Link 
        className={`
          border-2 border-transparent flex font-sans font-light items-center justify-center py-2 text-2xl rounded-full w-44
          transition-colors duration-300 ease-in-out
          ${pathname === '/about' ? 'bg-white/80 backdrop-blur-xs text-black' : 'bg-transparent text-white hover:border-white/80'}`}
        href="/about"
      >
        About
      </Link>
      <Link 
        className={`
          border-2 border-transparent flex font-sans font-light items-center justify-center py-2 text-2xl rounded-full w-44
          transition-colors duration-300 ease-in-out
          ${pathname === '/services' ? 'bg-white/80 backdrop-blur-xs text-black' : 'bg-transparent text-white hover:border-white/80'}`}
        href="/services"
      >
        Services
      </Link>
      <Link 
        className={`
          border-2 border-transparent flex font-sans font-light items-center justify-center py-2 text-2xl rounded-full w-44
          transition-colors duration-300 ease-in-out
          ${pathname === '/pricing' ? 'bg-white/80 backdrop-blur-xs text-black' : 'bg-transparent text-white hover:border-white/80'}`}
        href="/pricing"
      >
        Pricing
      </Link>
      <Link 
        className={`
          border-2 border-transparent flex font-sans font-light items-center justify-center py-2 text-2xl rounded-full w-44
          transition-colors duration-300 ease-in-out
          ${pathname === '/contact' ? 'bg-white/80 backdrop-blur-xs text-black' : 'bg-transparent text-white hover:border-white/80'}`}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}
  
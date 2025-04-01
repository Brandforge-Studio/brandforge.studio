import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="backdrop-blur-sm bg-slate-800/80 flex flex-col gap-8 p-8 rounded-3xl w-full">
      <nav className="flex flex-row gap-2 justify-center w-full">
        <Link 
          className="border-b border-transparent hover:border-white" 
          href="/"
        >
          Home
        </Link>
        <span className="text-gray-300">|</span>
        <Link 
          className="border-b border-transparent hover:border-white" 
          href="/about"
        >
          About
        </Link>
        <span className="text-gray-300">|</span>
        <Link 
          className="border-b border-transparent hover:border-white" 
          href="/services"
        >
          Services
        </Link>

        <span className="text-gray-300">|</span>
        <Link 
          className="border-b border-transparent hover:border-white" 
          href="/pricing"
        >
          Pricing
        </Link>
        <span className="text-gray-300">|</span>
        <Link 
          className="border-b border-transparent hover:border-white" 
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <Socials />
      <p className="text-gray-300 text-center">
        Located in the city of Roanoke, Virginia.<br />
      </p>
      <small className="text-gray-300 text-center">&copy; 2025 Brandforge Studio, LLC.</small>
    </footer>
  )
}
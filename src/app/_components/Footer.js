import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="h-fit pl-2 pr-2 pb-2 w-full">
      <footer className="backdrop-blur-sm bg-black/50 flex flex-col gap-8 p-8 rounded-3xl w-full">
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
          Located in the city of Roanoke, Virginia.
        </p>
        <small className="text-gray-300 text-center">&copy; 2025 Brandforge Studio, LLC.</small>
      </footer>
    </div>
  )
}
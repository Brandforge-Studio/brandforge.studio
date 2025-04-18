'use client';
import NavButton from "./NavButton";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function PageNav() {
  const pathname = usePathname();
  const navButtons = [
    { label: "About", linkedPath: "/about" },
    { label: "Services", linkedPath: "/services" },
    { label: "Pricing", linkedPath: "/pricing" },
    { label: "Contact", linkedPath: "/contact" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between p-8 relative w-full">
      {
        pathname !== "/" && (
          <Image
            src="/logo.webp"
            alt="Logo"
            width={172}
            height={80}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-44 h-20"
          />
      )}
      <div className="flex-grow flex flex-row gap-8 justify-end">
        {navButtons.map(button => (
          <NavButton 
            key={button.label}
            label={button.label}
            linkedPath={button.linkedPath}
          />
        ))}
      </div>
    </nav>
  );
}
  
'use client';
import NavButton from "./NavButton";

export default function PageNav() {
  const navButtons = [
    { label: "About", linkedPath: "/about" },
    { label: "Services", linkedPath: "/services" },
    { label: "Contact", linkedPath: "/contact" },
  ];

  return (
    <nav className="flex flex-row gap-8 justify-end p-8 w-full">
      {navButtons.map(button => (
        <NavButton 
          key={button.label}
          label={button.label}
          linkedPath={button.linkedPath}
        />
      ))}
    </nav>
  );
}
  
'use client';

import TeamSection from "../_components/TeamSection";

export default function About() {
  const teamMembers = [
    {
      imagePath: "/teamGarland.webp",
      name: "Garland Key",
      title: "Creative Director",
      description: "Garland, is rumored to think exclusively in binary and hex codes. If something incredible appears online, there's a good chance Garland dreamed it up while the rest of us were figuring out our coffee machines. Officially, he's our Head Engineer & Designer, but unofficially, he's solving the world's problems one pixel at a time."
    },
    {
      imagePath: "/teamJosh.webp",
      name: "Josh Ostapowicz",
      title: "Software Engineer",
      description: "Josh, aka The Kid Genius, probably built his first website while still in diapers. As our Software Engineer, he's proof that caffeine and coding can coexist as a balanced diet. Legend has it Josh can debug code with his eyes closed—usually because he's napping through meetings."
    },
    
  ];
  
  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="font-semibold py-8 text-6xl text-center text-white">Meet Our Team!</h1>
      { teamMembers.map((member) => (
        <TeamSection
          key={member.name}
          imagePath={member.imagePath}
          name={member.name}
          title={member.title}
          description={member.description}
        />
      ))}
    </div>
  );
}

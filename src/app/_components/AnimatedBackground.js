'use client';
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const backgroundRef = useRef(null);
  
  useEffect(() => {
    const background = backgroundRef.current;
    let position = 0;
    let animationId;
    
    const animate = () => {
      // Continuously move the background upward
      position -= 0.5; // Adjust speed as needed
      
      // Simply apply the position - CSS background-repeat will handle the seamless looping
      background.style.backgroundPosition = `0px ${position}px`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div 
      ref={backgroundRef} 
      className="fixed top-0 left-0 w-screen h-screen -z-10"
      style={{ 
        backgroundImage: "url('/space.svg')",
        backgroundSize: "100vw auto",
        backgroundRepeat: "repeat-y",
        imageRendering: "crisp-edges"
      }}
    />
  );
} 
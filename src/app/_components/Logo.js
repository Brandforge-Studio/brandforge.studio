"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Logo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [sectionBounds, setSectionBounds] = useState({ 
    left: 0, top: 0, width: 0, height: 0 
  });
  
  // Initialize and update section bounds
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
    };
    
    // Initial measurement
    updateBounds();
    
    // Update on resize
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);
  
  // Track mouse movement across the entire viewport
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate logo positions with viewport-wide tracking
  const calculatePositions = () => {
    if (sectionBounds.width === 0) return { blue: { x: 0, y: 0 }, red: { x: 0, y: 0 } };
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate relative position within viewport (0 to 1)
    const relativeX = mousePosition.x / viewportWidth;
    const relativeY = mousePosition.y / viewportHeight;
    
    // Movement range
    const moveRangeX = 15; // percentage
    const moveRangeY = 15; // percentage
    
    // Calculate centered position (-0.5 to 0.5)
    const centeredX = relativeX - 0.5;
    const centeredY = relativeY - 0.5;
    
    // Calculate distance from center (0 to ~0.7 for corners)
    const distanceFromCenter = Math.sqrt(centeredX * centeredX + centeredY * centeredY);
    
    // Smooth deceleration factor (1 at center, approaches 0 at edges)
    // Using a gentler falloff (1.2 instead of 1.4)
    const smoothFactor = Math.max(0, 1 - distanceFromCenter * 1.2);
    
    // Blue logo follows mouse (attraction) with smooth deceleration
    const blueX = centeredX * moveRangeX * 2 * smoothFactor;
    const blueY = centeredY * moveRangeY * 2 * smoothFactor;
    
    // Red logo moves away from mouse (repulsion) with smooth deceleration
    const redX = -centeredX * moveRangeX * 2 * smoothFactor;
    const redY = -centeredY * moveRangeY * 2 * smoothFactor;
    
    return { 
      blue: { x: blueX, y: blueY },
      red: { x: redX, y: redY }
    };
  };
  
  const positions = calculatePositions();

  return (
    <section 
      ref={sectionRef}
      className="aspect-[2/1] flex justify-center items-center relative w-full h-full"
    >
      <Link href="/" className="relative w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* White logo with standard float animation */}
          <div className="relative z-30">
            <Image
              src="/logoWhite.svg"
              alt="Brand Forge Logo"
              width={1000}
              height={450}
              className="animate-float"
            />
          </div>
          
          {/* Red logo with slow float animation and mouse repulsion */}
          <div 
            style={{
              position: 'absolute',
              transform: `translate(${positions.red.x}%, ${positions.red.y}%)`,
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              zIndex: 20
            }}
          >
            <Image
              src="/logoRed.svg"
              alt="Brand Forge Logo"
              width={1000}
              height={450}
              className="animate-float-slow"
            />
          </div>
          
          {/* Blue logo with delayed float animation and mouse following */}
          <div
            style={{
              position: 'absolute',
              transform: `translate(${positions.blue.x}%, ${positions.blue.y}%)`,
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              zIndex: 10
            }}
          >
            <Image
              src="/logoBlue.svg"
              alt="Brand Forge Logo"
              width={1000}
              height={450}
              className="animate-float-slow-delay"
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
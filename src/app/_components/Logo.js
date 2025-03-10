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
  
  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only update if mouse is within viewport
      if (e.clientX >= 0 && e.clientY >= 0) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate logo positions with gentle edge deceleration
  const calculatePositions = () => {
    if (sectionBounds.width === 0) return { blue: { x: 0, y: 0 }, red: { x: 0, y: 0 } };
    
    // Calculate relative position within section (0 to 1)
    const relativeX = Math.max(0, Math.min(1, 
      (mousePosition.x - sectionBounds.left) / sectionBounds.width
    ));
    const relativeY = Math.max(0, Math.min(1, 
      (mousePosition.y - sectionBounds.top) / sectionBounds.height
    ));
    
    // Simple edge easing function (less aggressive than the quadratic one)
    const easeEdge = (value) => {
      // Convert 0-1 to -0.5 to 0.5 range
      const centered = value - 0.5;
      // Apply a gentle cubic easing
      return centered * (1 - 0.5 * Math.abs(centered));
    };
    
    // Movement range
    const moveRangeX = 15; // percentage
    const moveRangeY = 15; // percentage
    
    // Blue logo follows mouse (attraction) with gentle edge easing
    const blueX = easeEdge(relativeX) * moveRangeX * 2;
    const blueY = easeEdge(relativeY) * moveRangeY * 2;
    
    // Red logo moves away from mouse (repulsion) with gentle edge easing
    const redX = -easeEdge(relativeX) * moveRangeX * 2;
    const redY = -easeEdge(relativeY) * moveRangeY * 2;
    
    return { 
      blue: { x: blueX, y: blueY },
      red: { x: redX, y: redY }
    };
  };
  
  const positions = calculatePositions();

  return (
    <>
      <style jsx global>{`
        @keyframes bobFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
      
      <section 
        ref={sectionRef}
        className="aspect-[2/1] flex justify-center items-center relative w-1/2"
      >
        <Link href="/" className="relative w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            {/* White logo with bobbing animation */}
            <div className="relative z-30">
              <Image
                src="/logo-white.svg"
                alt="Brand Forge Logo"
                width={1000}
                height={450}
                style={{
                  animation: 'bobFloat 3s ease-in-out infinite'
                }}
              />
            </div>
            
            {/* Red logo with mouse repulsion and bobbing */}
            <div 
              style={{
                position: 'absolute',
                transform: `translate(${positions.red.x}%, ${positions.red.y}%)`,
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                zIndex: 20
              }}
            >
              <Image
                src="/logo-red.svg"
                alt="Brand Forge Logo"
                width={1000}
                height={450}
                style={{
                  animation: 'bobFloat 3.5s ease-in-out infinite'
                }}
              />
            </div>
            
            {/* Blue logo with mouse following and bobbing */}
            <div 
              style={{
                position: 'absolute',
                transform: `translate(${positions.blue.x}%, ${positions.blue.y}%)`,
                transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                zIndex: 10
              }}
            >
              <Image
                src="/logo-blue.svg"
                alt="Brand Forge Logo"
                width={1000}
                height={450}
                style={{
                  animation: 'bobFloat 4s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
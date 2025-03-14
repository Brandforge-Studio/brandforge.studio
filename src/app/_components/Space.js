'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Space() {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  
  // Update viewport size and handle resize
  useEffect(() => {
    const updateSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Initial size
    updateSize();
    
    // Listen for resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  // Only render when we have viewport dimensions
  if (viewportSize.width === 0) {
    return <div className="fixed inset-0 -z-10 bg-black"></div>;
  }
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full flex items-center justify-end">
        <div className="relative translate-x-1/2">
          <div className="w-[225vmax] h-[225vmax] relative animate-rotate-very-slow origin-center">
            <Image
              src="/space.svg"
              alt="Space background"
              fill
              className="object-fill"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

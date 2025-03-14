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

/* Commented out previous implementation
'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Space() {
  const [isLoaded, setIsLoaded] = useState(false);
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
  
  // Simple preload check
  useEffect(() => {
    const img = new Image();
    img.src = '/space.svg';
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error('Error loading space.svg');
      setIsLoaded(true); // Show fallback
    };
  }, []);
  
  if (!isLoaded || viewportSize.width === 0) {
    return <div className="fixed inset-0 -z-10 bg-black"></div>;
  }
  
  // Calculate size in pixels for more precise control
  const size = Math.max(viewportSize.width, viewportSize.height) * 4.5;
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full flex items-center justify-end border border-blue-500">
        <div 
          className="bg-[url('/space.svg')] bg-contain bg-center bg-no-repeat translate-x-1/2 w-[9999px] h-[9999px]"
        />
      </div>
    </div>
  );
}
*/ 
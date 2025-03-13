'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function SpaceRock() {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef(null);
  const requestIdRef = useRef(null);
  const lastTimeRef = useRef(0);

  
  useEffect(() => {
    // Preload the image to avoid flickering
    const img = new Image();
    img.src = '/space-rock.svg';
    img.onload = () => setIsLoaded(true);
    
    return () => {
      // Clean up
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);s
      }
    };
  }, []);
  
  if (!isLoaded) {
    return <div className="fixed inset-0 bg-black -z-10" />;
  }
  
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pointer-events-none">
      <img 
        src="/space-rock.svg" 
        alt="Space Rock" 
        className="w-full h-auto"
      />
    </div>
  );
} 
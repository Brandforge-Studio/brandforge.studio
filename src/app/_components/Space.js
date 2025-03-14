'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Space() {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const requestIdRef = useRef(null);
  const speedRef = useRef(0.5); // Pixels per frame
  const lastTimeRef = useRef(0);
  
  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    
    // Calculate time elapsed since last frame
    const elapsed = timestamp - lastTimeRef.current;
    
    // Use a consistent speed regardless of frame rate
    // 60 is a reference frame rate (60fps)
    const pixelsToMove = (speedRef.current * elapsed) / (1000 / 60);
    
    positionRef.current -= pixelsToMove;
    
    if (animationRef.current) {
      animationRef.current.style.backgroundPosition = `0px ${positionRef.current}px`;
      lastTimeRef.current = timestamp;
      requestIdRef.current = requestAnimationFrame(animate);
    }
  }, []);
  
  useEffect(() => {
    // Check if the image can be loaded
    const img = new Image();
    img.src = '/space.svg';
    img.onload = () => setIsLoaded(true);
    img.onerror = (e) => {
      console.error('Error loading space.svg:', e);
      // Fallback to a color if the image fails to load
      setIsLoaded(true);
    };
  }, []);
  
  useEffect(() => {
    if (isLoaded && animationRef.current) {
      // Start animation only after image is loaded
      lastTimeRef.current = 0; // Reset time
      requestIdRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      // Clean up animation frame on unmount
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [isLoaded, animate]);
  
  if (!isLoaded) {
    return <div className="fixed inset-0 -z-10 bg-black"></div>;
  }
  
  return (
    <div className="fixed inset-0 -z-10">
      <img 
        src="/space.svg" 
        alt="Space background" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
} 
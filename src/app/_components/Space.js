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
    // Preload the image to avoid flickering
    const img = new Image();
    img.src = '/space.svg';
    img.onload = () => setIsLoaded(true);
    
    return () => {
      // Clean up
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
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
    return <div className="fixed inset-0 bg-black -z-10" />;
  }
  
  return (
    <div 
      ref={animationRef}
      className="fixed inset-0 w-screen h-screen bg-repeat-y -z-10"
      style={{ 
        backgroundImage: "url('/space.svg')",
        backgroundSize: "100vw auto",
      }}
    />
  );
} 
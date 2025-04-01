'use client';
import { useEffect, useState, useRef } from 'react';

export default function Asteroid() {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const gradientRef = useRef(null);
  const animationFrameId = useRef(null);
  
  // Angle for circular movement
  const angle = useRef(0);
  const lastUpdateTime = useRef(0);
  
  // Function to smoothly animate the gradient in a circular pattern
  const animateGradient = (timestamp) => {
    if (!gradientRef.current) {
      animationFrameId.current = requestAnimationFrame(animateGradient);
      return;
    }
    
    // Initialize lastUpdateTime if needed
    if (!lastUpdateTime.current) {
      lastUpdateTime.current = timestamp;
    }
    
    // Calculate time delta for consistent speed regardless of frame rate
    const deltaTime = timestamp - lastUpdateTime.current;
    lastUpdateTime.current = timestamp;
    
    // Speed of rotation in radians per millisecond
    // Lower value = slower rotation
    const rotationSpeed = 0.0005;
    
    // Update angle based on time
    angle.current += rotationSpeed * deltaTime;
    
    // Keep angle between 0 and 2π
    if (angle.current > Math.PI * 2) {
      angle.current -= Math.PI * 2;
    }
    
    // Calculate position on circle
    // Center at (50%, 50%) with radius of 30%
    const centerX = 50;
    const centerY = 50;
    const radius = 30;
    
    const x = centerX + Math.cos(angle.current) * radius;
    const y = centerY + Math.sin(angle.current) * radius;
    
    // Update the gradient position
    gradientRef.current.style.background = `radial-gradient(
      circle at ${x}% ${y}%, 
      #f67e16 0%, 
      #e526ef 33%, 
      #cdf858 66%, 
      #5efbd2 100%
    )`;
    
    // Continue the animation
    animationFrameId.current = requestAnimationFrame(animateGradient);
  };
  
  useEffect(() => {
    // Preload both images
    const img1 = new Image();
    img1.src = '/asteroid.webp';
    
    const img2 = new Image();
    img2.src = '/asteroidHolo.webp';
    
    // Set loaded when both images are ready
    Promise.all([
      new Promise(resolve => { img1.onload = resolve; }),
      new Promise(resolve => { img2.onload = resolve; })
    ]).then(() => setIsLoaded(true));
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  // Start gradient animation when loaded
  useEffect(() => {
    if (isLoaded && gradientRef.current) {
      // Start the animation loop
      animationFrameId.current = requestAnimationFrame(animateGradient);
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isLoaded]);
  
  // Get dimensions of the base image after it loads
  useEffect(() => {
    if (isLoaded && imgRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: imgRef.current.offsetWidth,
          height: imgRef.current.offsetHeight
        });
      };
      
      // Initial measurement
      updateDimensions();
      
      // Update on window resize
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, [isLoaded]);
  
  if (!isLoaded) {
    return null;
  }
  
  return (
    <div className="absolute -bottom-10 right-0 w-full h-fit z-[-2]">
      <div className="relative animate-float-slow">
        <img 
          ref={imgRef}
          src="/asteroid.webp" 
          alt="Asteroid floating in space" 
          className="w-full h-auto"
        />
        <div
          ref={gradientRef}
          className="asteroidMask absolute top-0 left-0 mix-blend-color-dodge"
          style={{ 
            width: dimensions.width, 
            height: dimensions.height,
            background: 'radial-gradient(circle at 50% 50%, #f67e16 0%, #e526ef 33%, #cdf858 66%, #5efbd2 100%)'
          }}
        />
      </div>
    </div>
  );
} 
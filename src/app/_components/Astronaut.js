'use client';
import { useEffect, useState, useRef } from 'react';

export default function Astronaut() {
  
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
    const img = imgRef.current;
    const handleLoad = () => {
      if (img) {
        setDimensions({ width: img.offsetWidth, height: img.offsetHeight });
        setIsLoaded(true); // Mark as loaded once dimensions are set
      }
    };

    if (img?.complete) {
      handleLoad();
    } else if (img) {
      img.addEventListener('load', handleLoad);
    }

    // Optional: Recalculate on resize if needed, though less critical without fixed positioning
    const handleResize = () => {
      if (img && isLoaded) { // Only recalculate if already loaded
        setDimensions({ width: img.offsetWidth, height: img.offsetHeight });
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (img) {
        img.removeEventListener('load', handleLoad);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]); // Rerun effect if isLoaded changes (e.g., initial load)
  
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
  
  // Render nothing or a placeholder until loaded and dimensions are known
  // This prevents the gradient overlay from appearing with 0 dimensions initially
  if (!isLoaded || dimensions.width === 0) {
    // You might want a placeholder here, or simply return null
    // For now, returning null to avoid rendering before dimensions are ready
    // We still need the img element rendered initially for the load event
    return (
       <div className="w-full h-auto invisible"> {/* Keep structure but hide */}
         <img
           ref={imgRef}
           src="/astronaut.webp"
           alt="" // Alt text can be empty if purely decorative or handled by the visible one
           className="w-full h-auto" // Ensure image scales
           style={{ opacity: 0 }} // Hide the pre-load image
         />
       </div>
    );
  }
  
  return (
    <div className="w-full h-auto">
      <div className="relative animate-float"> {/* Relative container for positioning */}
        <img
          ref={imgRef}
          src="/astronaut.webp"
          alt="Astronaut outlined in psychedelic neon colors"
          className="w-full h-auto block" 
        />
        <div
          ref={gradientRef}
          className="astronautMask absolute inset-0 mix-blend-color-dodge" 
          // Use inset-0 to cover the entire parent area rather than explicit dimensions
          style={{
            background: 'radial-gradient(circle at 50% 50%, #f67e16 0%, #e526ef 33%, #cdf858 66%, #5efbd2 100%)'
          }}
        />
      </div>
    </div>
  );
} 
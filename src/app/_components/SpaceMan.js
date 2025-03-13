'use client';
import { useEffect, useState, useRef } from 'react';

export default function SpaceMan() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const gradientRef = useRef(null);
  const cardRef = useRef(null);
  const sparklesRef = useRef(null);
  const floatRef = useRef(null);
  
  // Smoothing values for mouse movement
  const smoothedX = useRef(0);
  const smoothedY = useRef(0);
  const animationFrameId = useRef(null);
  
  // Handle mouse movement for holographic effect
  const handleGlobalMouseMove = (event) => {
    if (!containerRef.current) return;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate relative position in the viewport (0-1)
    const relativeX = event.clientX / viewportWidth;
    const relativeY = event.clientY / viewportHeight;
    
    // Convert to percentages (0-100)
    const xPercent = relativeX * 100;
    const yPercent = relativeY * 100;
    
    // Update smoothed values with some easing
    smoothedX.current = smoothedX.current + (xPercent - smoothedX.current) * 0.1;
    smoothedY.current = smoothedY.current + (yPercent - smoothedY.current) * 0.1;
  };
  
  // Animation loop for smooth updates
  const updateAnimation = () => {
    if (!cardRef.current || !gradientRef.current || !sparklesRef.current) {
      animationFrameId.current = requestAnimationFrame(updateAnimation);
      return;
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate rotation values based on smoothed position
    // Map from 0-100 to -10 to 10 degrees
    const rotateY = ((smoothedX.current - 50) / 50) * 10;
    const rotateX = ((50 - smoothedY.current) / 50) * 10;
    
    // Apply transforms to the card, but preserve the float animation's Y translation
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Calculate gradient position
    const gradientX = 50 + (smoothedX.current - 50) * 1.5;
    const gradientY = 50 + (smoothedY.current - 50) * 1.5;
    
    // Apply gradient position
    gradientRef.current.style.backgroundPosition = `${gradientX}% ${gradientY}%`;
    
    // Apply sparkles position
    sparklesRef.current.style.backgroundPosition = `${smoothedX.current}% ${smoothedY.current}%`;
    
    // Adjust opacity based on cursor proximity to the element
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const distanceX = Math.abs(elementCenterX - viewportWidth * (smoothedX.current / 100)) / (viewportWidth / 2);
    const distanceY = Math.abs(elementCenterY - viewportHeight * (smoothedY.current / 100)) / (viewportHeight / 2);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Opacity decreases with distance (max 0.8, min 0.2)
    const opacity = Math.max(0.2, Math.min(0.8, 1 - distance * 0.5));
    sparklesRef.current.style.opacity = opacity.toFixed(2);
    
    animationFrameId.current = requestAnimationFrame(updateAnimation);
  };
  
  useEffect(() => {
    // Preload both images
    const img1 = new Image();
    img1.src = '/space-man-fill.webp';
    
    const img2 = new Image();
    img2.src = '/space-man-holo.webp';
    
    // Set loaded when both images are ready
    Promise.all([
      new Promise(resolve => { img1.onload = resolve; }),
      new Promise(resolve => { img2.onload = resolve; })
    ]).then(() => setIsLoaded(true));
  }, []);
  
  // Add global mouse move listener and start animation loop
  useEffect(() => {
    if (isLoaded) {
      // Initialize smoothed values to center
      smoothedX.current = 50;
      smoothedY.current = 50;
      
      // Add mouse move listener
      window.addEventListener('mousemove', handleGlobalMouseMove);
      
      // Start animation loop
      animationFrameId.current = requestAnimationFrame(updateAnimation);
      
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
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
    <div 
      ref={containerRef}
      className="fixed top-36 right-72 w-5/12 h-fit"
    >
      <div 
        ref={cardRef}
        className="relative transform-gpu"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div
          ref={floatRef}
          className="animate-float"
        >
          <img 
            ref={imgRef}
            src="/space-man-fill.webp" 
            alt="Space Man" 
            className="w-full h-auto"
          />
          <div
            ref={gradientRef}
            className="mask-shape absolute top-0 left-0 transition-all duration-300 ease-out mix-blend-color-dodge"
            style={{ 
              width: dimensions.width, 
              height: dimensions.height,
              background: 'radial-gradient(circle at 50% 50%, #f67e16 0%, #e526ef 33%, #cdf858 66%, #5efbd2 100%)',
              backgroundSize: '200% 200%',
              backgroundPosition: '50% 50%'
            }}
          />
          <div
            ref={sparklesRef}
            className="mask-shape absolute top-0 left-0 transition-all duration-300 ease-out mix-blend-color-dodge opacity-0"
            style={{ 
              width: dimensions.width, 
              height: dimensions.height,
              backgroundImage: 'url(/sparkles.gif)',
              backgroundSize: '180% 180%',
              backgroundPosition: '50% 50%'
            }}
          />
        </div>
      </div>
    </div>
  );
} 
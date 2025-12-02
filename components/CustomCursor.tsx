import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Mobile devices usually don't need a custom cursor, hidden via CSS media query in index.html, but strictly rendering only on large screens here is also good practice */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? '#fbbf24' : '#8b5cf6',
          backgroundColor: isHovering ? 'rgba(251, 191, 36, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
            x: position.x - 4,
            y: position.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
    </>
  );
};

export default CustomCursor;
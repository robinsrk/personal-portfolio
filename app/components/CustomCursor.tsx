'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const cursor = { x: position.x, y: position.y };
    let animationFrameId: number;
    const smoothFactor = 0.85; // Much higher for less lag

    const animate = () => {
      const dx = position.x - cursor.x;
      const dy = position.y - cursor.y;
      
      cursor.x += dx * smoothFactor;
      cursor.y += dy * smoothFactor;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onLinkHoverStart = () => {
      setLinkHovered(true);
    };

    const onLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    addEventListeners();
    animationFrameId = requestAnimationFrame(animate);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onLinkHoverStart);
      element.addEventListener('mouseleave', onLinkHoverEnd);
    });

    return () => {
      removeEventListeners();
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onLinkHoverStart);
        element.removeEventListener('mouseleave', onLinkHoverEnd);
      });
    };
  }, [position]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 transition-all duration-50 ${
            linkHovered ? 'w-8 h-8 bg-opacity-40' : 'w-4 h-4 bg-opacity-80'
          } ${clicked ? 'scale-75' : 'scale-100'}`}
        />
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

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

    let cursor = { x: position.x, y: position.y };
    let animationFrameId: number;
    const smoothFactor = 0.008; // Very slow movement

    const animate = () => {
      const dx = position.x - cursor.x;
      const dy = position.y - cursor.y;
      
      cursor.x += dx * smoothFactor;
      cursor.y += dy * smoothFactor;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`;
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

    const cursorHoverEffect = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    cursorHoverEffect();
    animate();

    return () => {
      removeEventListeners();
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div
      ref={cursorRef}
      style={{ left: 0, top: 0 }}
      className={`fixed pointer-events-none z-[100] transition-[width,height,background-color] duration-200 ${
        hidden ? 'opacity-0' : 'opacity-100'
      } ${clicked ? 'scale-75' : ''} ${
        linkHovered ? 'w-8 h-8 bg-purple-400/60' : 'w-5 h-5 bg-white/60'
      } rounded-full backdrop-blur-sm`}
    />
  );
}

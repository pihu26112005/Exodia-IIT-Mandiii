"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursorAnshul = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const movingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d")!;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }

      pointsRef.current.push({ x: e.clientX, y: e.clientY });
      if (pointsRef.current.length > 25) {
        pointsRef.current.shift();
      }

      setIsMoving(true);
      if (movingTimeoutRef.current) {
        clearTimeout(movingTimeoutRef.current);
      }
      movingTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 200);
    };

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (pointsRef.current.length > 1) {
          ctx.beginPath();
          ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
          
          for (let i = 1; i < pointsRef.current.length; i++) {
            const point = pointsRef.current[i];
            const prevPoint = pointsRef.current[i - 1];
            
            const xc = (prevPoint.x + point.x) / 2;
            const yc = (prevPoint.y + point.y) / 2;
            
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, xc, yc);
          }
          
          ctx.strokeStyle = '#FFD700';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }

        if (!isMoving && pointsRef.current.length > 0) {
          pointsRef.current = pointsRef.current.slice(1);
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (movingTimeoutRef.current) {
        clearTimeout(movingTimeoutRef.current);
      }
    };
  }, [isMoving]);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      <div
        ref={cursorRef}
        className="custom-cursor"
      />
      <style jsx global>{`
        .custom-cursor {
          width: 8px;
          height: 8px;
          background: #FFD700;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s;
          mix-blend-mode: screen;
          filter: blur(0.5px);
          box-shadow: 0 0 10px rgba(255, 51, 102, 0.5);
        }
      `}</style>
    </>
  );
};

export default CustomCursorAnshul;
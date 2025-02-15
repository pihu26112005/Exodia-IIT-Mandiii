"use client";

import { useEffect, useRef } from "react";

const CustomCursorAnshul = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    // Hide cursor globally
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    
    // Add cursor: none to all clickable elements
    const elements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    elements.forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animationId: number;

    const config = {
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    };

    // Initialize points at mouse position
    const initPoints = () => {
      pointsRef.current = Array(config.curvePoints).fill(null).map(() => ({
        x: mouseRef.current.x,
        y: mouseRef.current.y
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Initialize points if not already done
      if (pointsRef.current.length === 0) {
        initPoints();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePoints = () => {
      timeRef.current += 1;
      
      // Update first point with mouse position plus sleep effect
      const sleepX = Math.sin(timeRef.current * config.sleepTimeCoefX) * config.sleepRadiusX;
      const sleepY = Math.cos(timeRef.current * config.sleepTimeCoefY) * config.sleepRadiusY;
      
      pointsRef.current[0] = {
        x: mouseRef.current.x + sleepX,
        y: mouseRef.current.y + sleepY
      };

      // Update rest of points with lerp
      for (let i = 1; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i];
        const prevPoint = pointsRef.current[i - 1];
        
        point.x += (prevPoint.x - point.x) * config.curveLerp;
        point.y += (prevPoint.y - point.y) * config.curveLerp;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (pointsRef.current.length === 0) return;

      // Calculate velocity
      const velocity = Math.hypot(
        pointsRef.current[0].x - pointsRef.current[1].x,
        pointsRef.current[0].y - pointsRef.current[1].y
      );
      
      // Determine radius based on velocity
      const radius = velocity > config.velocityTreshold ? config.radius2 : config.radius1;

      // Draw the curve with multiple passes for neon effect
      const drawCurve = (width: number, alpha: number) => {
        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        
        for (let i = 1; i < pointsRef.current.length - 1; i++) {
          const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
          const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = width;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffd700';
        ctx.stroke();
      };

      // Outer glow
      drawCurve(radius * 2, 0.1);
      // Middle glow
      drawCurve(radius * 1.5, 0.2);
      // Inner glow
      drawCurve(radius, 0.5);
      // Core
      drawCurve(radius * 0.5, 1);
    };

    const animate = () => {
      updatePoints();
      draw();
      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    initPoints();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      // Restore cursor
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
      elements.forEach(el => {
        (el as HTMLElement).style.removeProperty('cursor');
      });
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursorAnshul;
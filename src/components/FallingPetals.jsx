import React, { useEffect, useRef } from 'react';

export default function FallingPetals({ active = true, burstTrigger = 0 }) {
  const canvasRef = useRef(null);
  const petalsRef = useRef([]);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = [
      { fill: '#f59e0b', stroke: '#d97706', type: 'marigold' }, // Deep Marigold Saffron
      { fill: '#fbbf24', stroke: '#f59e0b', type: 'marigold' }, // Bright Yellow Genda
      { fill: '#e11d48', stroke: '#be123c', type: 'rose' },     // Crimson Rose
      { fill: '#9f1239', stroke: '#881337', type: 'rose' },     // Deep Royal Rose
      { fill: '#ffd700', stroke: '#d4af37', type: 'gold' }      // Gold sparkle leaf
    ];

    function createPetal(burst = false) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: burst ? width / 2 + (Math.random() - 0.5) * (width * 0.4) : Math.random() * width,
        y: burst ? height * 0.4 + (Math.random() - 0.5) * 100 : Math.random() * -height * 0.8,
        vx: burst ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 1.5,
        vy: burst ? -Math.random() * 10 - 2 : Math.random() * 1.2 + 1.2,
        size: Math.random() * 9 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        swaySpeed: Math.random() * 0.03 + 0.015,
        swayPhase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.6,
        color: color
      };
    }

    // Initialize petals pool
    const petalCount = window.innerWidth < 768 ? 28 : 45;
    petalsRef.current = Array.from({ length: petalCount }, () => createPetal(false));

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      ctx.fillStyle = p.color.fill;
      ctx.strokeStyle = p.color.stroke;
      ctx.lineWidth = 1;

      ctx.beginPath();
      if (p.color.type === 'rose') {
        // Heart-like rose petal
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size * 0.8, -p.size * 0.6, -p.size, p.size * 0.6, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size * 0.6, p.size * 0.8, -p.size * 0.6, 0, 0);
      } else {
        // Slender marigold petal
        ctx.moveTo(0, -p.size * 0.9);
        ctx.bezierCurveTo(-p.size * 0.45, -p.size * 0.3, -p.size * 0.3, p.size * 0.6, 0, p.size);
        ctx.bezierCurveTo(p.size * 0.3, p.size * 0.6, p.size * 0.45, -p.size * 0.3, 0, -p.size * 0.9);
      }
      ctx.fill();
      ctx.stroke();

      // Subtle vein highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 0.5);
      ctx.lineTo(0, p.size * 0.5);
      ctx.stroke();

      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      if (active) {
        for (let i = 0; i < petalsRef.current.length; i++) {
          const p = petalsRef.current[i];
          p.rotation += p.rotSpeed;
          p.swayPhase += p.swaySpeed;
          p.x += p.vx + Math.sin(p.swayPhase) * 1.2;
          p.y += p.vy;

          // Drag on burst velocity
          p.vx *= 0.96;
          if (p.vy < 2.5) {
            p.vy += 0.15; // Gravity acceleration
          }

          drawPetal(p);

          // Recycle petal when it leaves screen
          if (p.y > height + 25 || p.x < -30 || p.x > width + 30) {
            petalsRef.current[i] = createPetal(false);
            petalsRef.current[i].y = -20;
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    }

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [active]);

  // Burst effect when trigger changes
  useEffect(() => {
    if (!burstTrigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add 40 burst petals
    const newBurstPetals = Array.from({ length: 40 }, () => {
      const colors = [
        { fill: '#f59e0b', stroke: '#d97706', type: 'marigold' },
        { fill: '#fbbf24', stroke: '#f59e0b', type: 'marigold' },
        { fill: '#e11d48', stroke: '#be123c', type: 'rose' },
        { fill: '#9f1239', stroke: '#881337', type: 'rose' },
        { fill: '#ffd700', stroke: '#d4af37', type: 'gold' }
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const width = canvas.width;
      const height = canvas.height;
      return {
        x: width / 2 + (Math.random() - 0.5) * 160,
        y: height * 0.45 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 10 + 9,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.08,
        swaySpeed: Math.random() * 0.04 + 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        opacity: 0.95,
        color: color
      };
    });

    petalsRef.current.push(...newBurstPetals);

    // Trim after 5 seconds to keep count clean
    setTimeout(() => {
      if (petalsRef.current.length > 50) {
        petalsRef.current = petalsRef.current.slice(-50);
      }
    }, 4500);
  }, [burstTrigger]);

  return (
    <canvas
      ref={canvasRef}
      className="falling-petals-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50
      }}
    />
  );
}

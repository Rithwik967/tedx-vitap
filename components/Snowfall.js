'use client';
import { useEffect, useRef } from 'react';

export default function Snowfall({
  count = 60,
  color = '#ff2b2b',
  // made snowballs smaller
  maxSize = 3,
  minSize = 0.6,
  accumulationStrength = 0.6,
  columnsPerPx = 0.25,
  opacity = 0.5, // overall opacity multiplier (0.5 = 50%)
} = {}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');

    let ratio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    let width = Math.max(1, parent.clientWidth);
    let height = Math.max(1, parent.clientHeight);
    let particles = [];

    // accumulation array (columns)
    let cols = Math.max(32, Math.floor(width * columnsPerPx));
    let accum = new Float32Array(cols);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: minSize + Math.random() * (maxSize - minSize),
          // made horizontal speed smaller (less drift)
          vx: -0.15 + Math.random() * 0.3,
          // made vertical speed slower
          vy: 0.25 + Math.random() * 0.9,
          a: 0.4 + Math.random() * 0.9,
          sway: Math.random() * 1.5,
        });
      }
    };

    const initAccum = () => {
      cols = Math.max(32, Math.floor(width * columnsPerPx));
      accum = new Float32Array(cols);
    };

    const resize = () => {
      ratio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      width = Math.max(1, parent.clientWidth);
      height = Math.max(1, parent.clientHeight);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      initParticles();
      initAccum();
    };

    resize();

    let rafId;
    const drawAccumulation = () => {
      if (!accum) return;
      ctx.save();
      ctx.filter = 'blur(8px)';
      const grad = ctx.createLinearGradient(0, height, 0, height - Math.max(...accum || [0]) - 60);
      grad.addColorStop(0, hexToRgba(color, 0.95 * opacity));
      grad.addColorStop(1, hexToRgba(color, 0.1 * opacity));
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.moveTo(0, height);
      const step = width / Math.max(1, accum.length - 1);
      for (let i = 0; i < accum.length; i++) {
        const x = i * step;
        const y = height - accum[i];
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.fillStyle = hexToRgba('#ffffff', 0.06 * opacity);
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let i = 0; i < accum.length; i++) {
        const x = i * step;
        const y = height - accum[i];
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, hexToRgba(color, p.a * opacity));
        grad.addColorStop(0.6, hexToRgba(color, p.a * 0.35 * opacity));
        grad.addColorStop(1, hexToRgba('#000000', 0));
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // update - slower motion and subtler sway
        p.x += p.vx + Math.sin(p.sway + p.y * 0.01) * 0.35;
        p.y += p.vy;
        p.sway += 0.006;

        const idx = Math.floor((p.x / width) * accum.length);
        const clampedIdx = Math.max(0, Math.min(accum.length - 1, idx));
        const groundY = height - (accum[clampedIdx] || 0);

        if (p.y + p.r >= groundY) {
          accum[clampedIdx] += Math.min(p.r * accumulationStrength, height * 0.15);
          if (clampedIdx > 0) accum[clampedIdx - 1] += (p.r * accumulationStrength) * 0.06;
          if (clampedIdx < accum.length - 1) accum[clampedIdx + 1] += (p.r * accumulationStrength) * 0.06;

          p.y = -10 - Math.random() * 40;
          p.x = Math.random() * width;
          p.vx = -0.15 + Math.random() * 0.3;
          p.vy = 0.25 + Math.random() * 0.9;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
      }

      for (let i = 0; i < accum.length; i++) {
        accum[i] *= 0.999;
      }

      drawAccumulation();

      rafId = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [count, color, maxSize, minSize, accumulationStrength, columnsPerPx, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'screen',
      }}
    />
  );
}

function hexToRgba(hex, alpha = 1) {
  const cleaned = hex.replace('#', '');
  const bigint = parseInt(
    cleaned.length === 3 ? cleaned.split('').map((c) => c + c).join('') : cleaned,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
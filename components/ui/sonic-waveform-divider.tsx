"use client";

import React, { useEffect, useRef } from 'react';

// Sonic Waveform Divider Component - Customized for About section
const SonicWaveformDivider = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        let time = 0;

        const resizeCanvas = () => {
            // Set canvas to full viewport width
            canvas.width = window.innerWidth;
            canvas.height = 200; // Fixed height for divider
        };
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const lineCount = 30;
            const segmentCount = 60;
            const height = canvas.height / 2;
            
            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                const progress = i / lineCount;
                const colorIntensity = Math.sin(progress * Math.PI);
                // Use TEDx red color instead of teal
                ctx.strokeStyle = `rgba(230, 43, 30, ${colorIntensity * 0.3})`;
                ctx.lineWidth = 1;

                for (let j = 0; j < segmentCount + 1; j++) {
                    const x = (j / segmentCount) * canvas.width;
                    
                    // Mouse influence
                    const distToMouse = Math.hypot(x - mouse.x, (height) - mouse.y);
                    const mouseEffect = Math.max(0, 1 - distToMouse / 300);

                    // Wave calculation - more subtle for divider
                    const noise = Math.sin(j * 0.1 + time + i * 0.2) * 10;
                    const spike = Math.cos(j * 0.2 + time + i * 0.1) * Math.sin(j * 0.05 + time) * 20;
                    const y = height + noise + spike * (1 + mouseEffect * 1.5);
                    
                    if (j === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            time += 0.015;
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.addEventListener('mousemove', handleMouseMove);
        
        resizeCanvas();
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="relative w-screen h-32 overflow-hidden bg-black" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0"
                style={{ width: '100vw', height: '128px', left: 0 }}
            />
        </div>
    );
};

export default SonicWaveformDivider;

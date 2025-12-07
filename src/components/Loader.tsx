import { useEffect, useRef, useState } from 'react';

const Loader = () => {
  const canvasRef = useRef(null);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuration
    const lineCount = 60; // How many lines on screen
    const lines = [];

    const colors = [
          '138, 43, 226', // BlueViolet (Neon)
          '147, 51, 234', // Vivid Purple
          '75, 0, 130',   // Indigo (Deep)
          '192, 132, 252' // Lavender (Highlight)
        ];

        // Initialize Lines
        for (let i = 0; i < lineCount; i++) {
          lines.push({
            x: Math.random() * canvas.width,
            width: Math.random() * 2 + 0.5,
            speed: (Math.random() - 0.5) * 1.5,
            opacity: Math.random() * 0.5,
            opacitySpeed: (Math.random() * 0.02) + 0.005,
            // Randomly pick one of the purple colors
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }

    const draw = () => {
      // 1. Clear Screen (Pure Black)
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw Lines
      lines.forEach(line => {
        // Update Opacity (Pulse effect)
        line.opacity += line.opacitySpeed;
        if (line.opacity >= 0.6 || line.opacity <= 0.05) {
          line.opacitySpeed *= -1; // Reverse fade direction
        }

        // Update Position (Drift effect)
        line.x += line.speed;

        // Wrap around screen
        if (line.x > canvas.width) line.x = 0;
        if (line.x < 0) line.x = canvas.width;

        // Draw the line
        ctx.fillStyle = `rgba(${line.color}, ${line.opacity})`;
        ctx.fillRect(line.x, 0, line.width, canvas.height); // Full height line
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup Timer (Optional: Remove this block if you want it to run forever until loaded)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setShouldRender(false), 800);
    }, 3000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(exitTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* Centered Text Overlay */}
      <div className="relative z-10">
        <h2 className="text-white/80 text-sm font-light tracking-[0.5em] animate-pulse font-mono uppercase">
          Getting Things Ready for you ...
        </h2>
      </div>
    </div>
  );
};

export default Loader;
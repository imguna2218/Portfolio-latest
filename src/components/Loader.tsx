import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const codeLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 1,
    left: `${5 + i * 6}%`,
  }));

  const generateRandomCode = () => {
    const chars = '01⚡✦★◆●■▲▼◀▶';
    return Array.from({ length: 20 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    ).join(' ');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-in">
      <div className="absolute inset-0 overflow-hidden">
        {codeLines.map((line) => (
          <div
            key={line.id}
            className="absolute top-0 text-primary opacity-70 text-sm font-mono whitespace-pre animate-code-rain"
            style={{
              left: line.left,
              animationDelay: `${line.delay}s`,
              animationDuration: `${line.duration}s`,
            }}
          >
            {generateRandomCode()}
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold gradient-text">G.P</h1>
      </div>
    </div>
  );
};

export default Loader;

import { useEffect, useState } from 'react';
import './Auth.scss';

export function AnimatedCharacters() {
  const [capycornPosition, setCapycornPosition] = useState({ x: 10, y: 80 });
  const [hydraPosition, setHydraPosition] = useState({ x: 80, y: 80 });
  const [isCapycornJumping, setIsCapycornJumping] = useState(false);
  const [isHydraJumping, setIsHydraJumping] = useState(false);

  // Walking animation
  useEffect(() => {
    const walkInterval = setInterval(() => {
      setCapycornPosition(prev => ({
        ...prev,
        x: (prev.x + 2) % window.innerWidth
      }));
      setHydraPosition(prev => ({
        ...prev,
        x: (prev.x - 2 + window.innerWidth) % window.innerWidth
      }));
    }, 50);

    return () => clearInterval(walkInterval);
  }, []);

  // Capycorn jumping animation
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsCapycornJumping(true);
      setTimeout(() => setIsCapycornJumping(false), 500);
    }, 4000);

    return () => clearInterval(jumpInterval);
  }, []);

  // Hydra jumping animation
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsHydraJumping(true);
      setTimeout(() => setIsHydraJumping(false), 500);
    }, 3000);

    return () => clearInterval(jumpInterval);
  }, []);

  return (
    <div className="animated-characters">
      <img
        src="capycorn.png"
        alt="Capycorn"
        className="character capycorn"
        style={{
          left: `${capycornPosition.x}px`,
          bottom: `${capycornPosition.y + (isCapycornJumping ? 30 : 0)}px`,
          transition: 'bottom 0.5s ease-out'
        }}
      />
      <img
        src="hydra.png"
        alt="Hydra"
        className="character hydra"
        style={{
          left: `${hydraPosition.x}px`,
          bottom: `${hydraPosition.y + (isHydraJumping ? 30 : 0)}px`,
          transition: 'bottom 0.5s ease-out'
        }}
      />
    </div>
  );
} 
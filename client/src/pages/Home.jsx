import React from 'react';
import backgroundSVG from '../assets/pattern-randomized.svg';
import HeroCard from '../components/HeroCard';

export default function Home() {
  const containerStyle = {
    backgroundImage: { backgroundSVG },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundSVG}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 min-h-screen">
          <HeroCard />
        </div>
      </div>
    </>
  );
}

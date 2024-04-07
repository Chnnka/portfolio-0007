import React from 'react';
import backgroundSVG from '../assets/pattern-randomized.svg';
import HeroCard from '../components/HeroCard';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundSVG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%', 
    height: '100vh', 
  };
  return (
    <>
      <div style={containerStyle}>
        <HeroCard />
      </div>
    </>
  );
}

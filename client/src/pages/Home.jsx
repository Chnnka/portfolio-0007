import React from 'react';
import backgroundSVG from '../assets/pattern-randomized.svg';
import HeroCard from '../components/HeroCard';

export default function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundSVG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%', // Set container width (adjust as needed)
    height: '100vh', // Set container height (adjust as needed)
  };
  return (
    <>
      <div style={containerStyle}>
        <HeroCard />
      </div>
    </>
  );
}

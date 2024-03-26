import otherArtGallery from '../constants/otherArtGallery';
import React from 'react';

export default function OtherArtGallery() {
  const Card = ({ image, title, subtitle }) => {
    return (
      <div className=" rounded-lg overflow-hidden shadow-md max-w-96 max-h-80">
        <img className="w-full h-2/3 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-gray-600 line-clamp-2">{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-6">
      {otherArtGallery.map((item) => (
        <Card
          key={item.title}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}

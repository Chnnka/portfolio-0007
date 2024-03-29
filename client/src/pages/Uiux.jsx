import React from 'react';
import coffeeWebsite from '../assets/ui/coffee_website.jpeg';
import dashboard from '../assets/ui/dashboard.png';
import quiz_app from '../assets/ui/quize_app.jpg';
import artsync from '../assets/ui/Artsync_wireframe.png';
import boc from '../assets/ui/Boc_Banner.png';
import cafefusion from '../assets/ui/Cafefusion_Banner.png';

const UiCard = ({ title, description, tags, imageUrl }) => (
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl">
    <img
      className="w-full h-52 object-fit-cover"
      src={imageUrl}
      alt="Project Image"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function Uiux() {
  const cardsData = [
    {
      title: 'Central Perk',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: coffeeWebsite,
    },
    {
      title: 'Dashboard Project',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: dashboard,
    },
    {
      title: 'Quiz App for Kids',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: quiz_app,
    },
    {
      title: 'ArtSync Wireframe',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: artsync,
    },
    {
      title: 'BOC Smart Passbook',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: boc,
    },
    {
      title: 'Cafe Fusion',
      description:
        'The Central perk website design project (demo project) is an ui design for coffee shop, giving presence of a dark, coffee vibe.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: cafefusion,
    },
  ];
  return (
    <>
      <div className="mt-16 mb-20 ">
        <h2 className="mt-10 mb-5 align-middle w-full font-sans text-center text-2xl">
          UI/UX Designs
        </h2>
        <p className="md:px-56 mb-5 justify-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          neque exercitationem labore adipisci ipsam voluptate, numquam totam,
          hic nemo blanditiis quis quidem commodi tempora maxime dolorum at?
          Qui, eaque accusamus?
        </p>
        <div className="flex flex-wrap justify-center items-center min-h-screen ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Responsive layout */}
            {cardsData.map((card) => (
              <UiCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

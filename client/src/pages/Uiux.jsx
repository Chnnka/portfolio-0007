import React from 'react';
import coffeeWebsite from '../assets/ui/coffee_website.jpeg';
import dashboard from '../assets/ui/dashboard.png';
import quiz_app from '../assets/ui/quize_app.jpg';
import artsync from '../assets/ui/Artsync_wireframe.png';
import boc from '../assets/ui/Boc_Banner.png';
import cafefusion from '../assets/ui/Cafefusion_Banner.png';

const UiCard = ({ title, description, tags, imageUrl }) => (
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl ">
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
        'This is a project management tool dashboard for a friend\'s university porject.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: dashboard,
    },
    {
      title: 'Quiz App for Kids',
      description:
        'Simple quiz mobile application design for kids',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: quiz_app,
    },
    {
      title: 'ArtSync Wireframe',
      description:
        'This is a personal ongoing project that I\'m working on.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: artsync,
    },
    {
      title: 'BOC Smart Passbook',
      description:
        'I have re-designed the BOC Smart passbook for greater experience.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: boc,
    },
    {
      title: 'Cafe Fusion',
      description:
        'The Cafe fusion website and mobile view UI design.',
      tags: ['#figma', '#photoshop', '#ui-ux'],
      imageUrl: cafefusion,
    },
  ];
  return (
    <>
      <div className="mt-24 sm:mt-28 sm:mx-10 text-center">
        <h2 className="mt-10 mb-5 align-middle w-full font-sans text-center text-2xl">
          UI/UX Designs
        </h2>
        <p className="sm:text-center mb-5 justify-center sm:text-gray-900">
          Step into a realm where creativity meets curiosity, and innovation
          intertwines with imagination. Here, amidst the pixels and wireframes,
          you'll find the culmination of my journey as a burgeoning UI/UX
          designer.
        </p>
        <div className="flex flex-wrap justify-center items-center min-h-screen ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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

import React from 'react';
import { Tooltip } from 'flowbite-react';

import html from '../assets/logo/html.png';
import css from '../assets/logo/css.png';
import js from '../assets/logo/js.png';
import flutter from '../assets/logo/flutter.png';
import react from '../assets/logo/react.webp';
import bootstrap from '../assets/logo/bootstrap.png';
import tailwind from '../assets/logo/tailwind.png';
import angular from '../assets/logo/angular.png';
import figma from '../assets/logo/figma.png';
import photoshop from '../assets/logo/photoshop.png';

export default function Applications() {
  const iconSize = 80;
  return (
    <div className="mt-20 mx-20 min-h-screen">
      <div className="flex flex-col justify-center">
        <p className="mx-auto justify-center items-center">
          Here I'm showcasing various projects and practices I have done over
          the time.
        </p>
        <div className="flex mt-2 justify-center items-center space-x-2">
          <Tooltip content="HTML5" style="light">
            <img
              src={html}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="CSS3" style="light">
            <img
              src={css}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="JavaScript" style="light">
            <img
              src={js}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="Flutter" style="light">
            <img
              src={flutter}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="ReactJS" style="light">
            <img
              src={react}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="Angular" style="light">
            <img
              src={angular}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="Bootstrap" style="light">
            <img
              src={bootstrap}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="TailwindCSS" style="light">
            <img
              src={tailwind}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="Figma" style="light">
            <img
              src={figma}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
          <Tooltip content="Photoshop" style="light">
            <img
              src={photoshop}
              alt="Icon 2"
              className="object-contain rounded-lg"
              width={35}
              height={35}
            />
          </Tooltip>
        </div>
        <br />

        <div className="mx-auto flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              Last updated 3 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

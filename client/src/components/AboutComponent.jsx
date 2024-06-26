import React from 'react';
import Brief from './Brief';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import avatar from '../assets/avatar/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehance,
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function AboutComponent() {
  const links = [
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/channaka-gunawardhana/',
    },
    {
      icon: faGithub,
      url: 'https://github.com/Chnnka',
    },
    {
      icon: faBehance,
      url: 'https://www.behance.net/channaka',
    },
    {
      icon: faXTwitter,
      url: 'https://twitter.com/Chnnka',
    },
  ];
  return (
    <div className="flex min-h-screen mt-24 sm:mt-28 md:mt-28 mb-10 justify-center">
      <div className="flex-col p-4 bg-white shadow-lg rounded-lg gap-5">
        <div className="flex gap-3">
          <img className="w-28 h-28  rounded-full" src={avatar} alt="" />
          <div className="font-medium dark:text-white">
            <div>Channaka Gunawardhane</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Developer / Artist
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              B.ICT (Hons) - Rajarata University of Sri Lanka
            </div>

            <div className="flex  items-center space-x-4 mt-4">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div class="w-full h-px bg-gray-200 mt-5"></div>
        <div className="flex gap-4 mt-4 justify-center">
          <button class="bg-amber-300 hover:bg-amber-400  text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <a href="/api/resume" download="Channaka_Gunawardhane_Resume.pdf">
              <span>Download Resume</span>
            </a>
          </button>
        </div>
        <Brief />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

import React from 'react';

export default function Skills() {
  return (
    <div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Skills
        </span>
      </div>
      <div className="max-w-md text-center justify-center items-center">
        <ol className="text-gray-600">
          <li>Mobile Application Development - Flutter</li>
          <li>UI & Visual Design - Figma, Adobe Photoshop</li>
          <li>HTML, CSS, JavaScript</li>
          <li>ReactJS</li>
        </ol>
      </div>
    </div>
  );
}

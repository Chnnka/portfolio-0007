import React from 'react'

export default function Experience() {
  return (
    <div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Experience
        </span>
      </div>

      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4 max-w-md">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2022 - May 2023
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Intern - Flutter Developer
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Elegant Media (Pvt) Ltd, Kohuwala (Full Time),
            <br />
            <span className="text-sm">
              Took training on the Flutter framework using company-provided
              training material and online courses to learn more about related
              skills such as Flutter UIs, APIs, Git, GitHub and BitBucket.
            </span>
          </p>
        </li>
      </ol>
    </div>
  );
}

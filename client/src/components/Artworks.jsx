import { Tabs } from 'flowbite-react';
import { HiClipboardList, HiCloud, HiPencil, HiPhotograph } from 'react-icons/hi';
import React from 'react';
import CanvasGallery from './CanvasGallery';

export default function Artworks() {
  return (
    <div className="mt-20 my-auto">
      <Tabs aria-label="Tabs with icons" style="underline" className='justify-center'>
        <Tabs.Item active title="Canvas Paintings" icon={HiPhotograph}>
          <CanvasGallery/>
        </Tabs.Item>
        <Tabs.Item title="Pencil Drawings" icon={HiPencil}>
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Pebble Gallery" icon={HiCloud}>
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Other" icon={HiClipboardList}>
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        
      </Tabs>
    </div>
  );
}

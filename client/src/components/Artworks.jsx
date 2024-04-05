import { Tabs } from 'flowbite-react';
import {
  HiClipboardList,
  HiCloud,
  HiPencil,
  HiPhotograph,
} from 'react-icons/hi';
import React from 'react';
import CanvasGallery from './CanvasGallery';
import PencilGallery from './PencilGallery';
import PebbleGallery from './PebbleGallery';
import OtherArtGallery from './OtherArtGallery';

export default function Artworks() {
  return (
    <div className="mt-24 md:mt-28 my-auto">
      <Tabs
        aria-label="Tabs with icons"
        style="underline"
        className="justify-center"
        
      >
        <Tabs.Item active title="Canvas Paintings" icon={HiPhotograph}>
          <CanvasGallery />
        </Tabs.Item>
        <Tabs.Item title="Pencil Drawings" icon={HiPencil}>
          <PencilGallery />
        </Tabs.Item>
        <Tabs.Item title="Pebble Gallery" icon={HiCloud}>
          <PebbleGallery />
        </Tabs.Item>
        <Tabs.Item title="Other" icon={HiClipboardList}>
          <OtherArtGallery />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

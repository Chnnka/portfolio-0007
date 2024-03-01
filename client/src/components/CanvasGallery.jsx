import React from 'react';
import just_a_life_01 from './../assets/canvas/JustALife_01_2023_03_17.jpg';
import devilmask from './../assets/canvas/image3.jpg';
import ninearch from './../assets/canvas/image7.jpg';
import lakeround1 from './../assets/canvas/image8.jpg';
import daladamaligawa from './../assets/canvas/image9.jpg';
import mandalaroundcanvas from './../assets/canvas/image10.jpg';
import ninearch2 from './../assets/canvas/image11.jpg';
import unawatuna from './../assets/canvas/image15.jpg';
import madeupscenery01 from './../assets/canvas/image22.jpg';
import lion01 from './../assets/canvas/image25.jpg';
import sunsetold from './../assets/canvas/image26.jpg';

export default function CanvasGallery() {
  return (
    <div className="px-6 pt-2 pb-7">
      <h1 className="text-gray-600 text-4xl pt-4 text-center">
        Canvas Paintings
      </h1>
      <p className="text-center py-3">Acrylic Paintings on Canvases</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={just_a_life_01}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={devilmask}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ninearch}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={lakeround1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={daladamaligawa}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={mandalaroundcanvas}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={ninearch2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={unawatuna}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={madeupscenery01}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={lion01} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={sunsetold}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

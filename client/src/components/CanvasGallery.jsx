import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import just_a_life_01 from './../assets/canvas/JustALife_01_2023_03_17.jpg';
import devilmask from './../assets/canvas/devilmask.jpg';
import ninearch from './../assets/canvas/image7.jpg';
import lakeround1 from './../assets/canvas/image8.jpg';
import daladamaligawa from './../assets/canvas/image9.jpg';
import mandalaroundcanvas from './../assets/canvas/image10.jpg';
import ninearch2 from './../assets/canvas/image11.jpg';
import unawatuna from './../assets/canvas/image15.jpg';
import madeupscenery01 from './../assets/canvas/image22.jpg';
import lion01 from './../assets/canvas/image25.jpg';
import sunsetold from './../assets/canvas/image26.jpg';
import seegiriya from './../assets/canvas/seegiriya.jpg';
import waterfallFirst from './../assets/canvas/waterfall_first.jpg';
import oakForest from './../assets/canvas/oak_forest.jpg';
import moonLight from './../assets/canvas/MoonNight.jpg';
import mist from './../assets/canvas/Mist.jpg';
import lionKing from './../assets/canvas/LionKing.jpg';
import blackPanther from './../assets/canvas/BlackPanther.jpg';
import madeUpScenery2 from './../assets/canvas/MadeUpScenery02.jpg';

import { Box, maxHeight } from '@mui/system';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: just_a_life_01,
    title: 'just a life',
  },
  {
    img: devilmask,
    title: 'Devil Mask',
  },
  {
    img: ninearch,
    title: 'Nine Arch',
  },
  {
    img: lakeround1,
    title: 'Coffee',
  },
  {
    img: daladamaligawa,
    title: 'Temple of Tooth Relic',
  },
  {
    img: mandalaroundcanvas,
    title: 'Honey',
    author: 'Mandala On Canvas',
  },
  {
    img: ninearch2,
    title: 'Nine Arch with Train',
  },
  {
    img: unawatuna,
    title: 'Unawatuna',
  },
  {
    img: madeupscenery01,
    title: 'Made Up Scenery 1',
  },
  {
    img: lion01,
    title: 'Lion Face',
  },
  {
    img: sunsetold,
    title: 'Sun Set old',
  },
  {
    img: seegiriya,
    title: 'Sigiriya',
  },
  {
    img: waterfallFirst,
    title: 'Waterfall Scenery',
  },
  {
    img: moonLight,
    title: 'Moon Night',
  },
  {
    img: oakForest,
    title: 'Oak Forest',
  },
  {
    img: mist,
    title: 'Misty forest',
  },
  {
    img: lionKing,
    title: 'Lion King',
  },
  {
    img: blackPanther,
    title: 'Black Panther',
  },
  {
    img: madeUpScenery2,
  },
];
export default function CanvasGallery() {
  return (
    <Box
      sx={{ width: '80%', margin: 'auto', height: '100%', overflowY: 'scroll' }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

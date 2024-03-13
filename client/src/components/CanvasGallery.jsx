import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: devilmask,
    title: 'Burger',
  },
  {
    img: ninearch,
    title: 'Camera',
  },
  {
    img: lakeround1,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: daladamaligawa,
    title: 'Hats',
    cols: 2,
  },
  {
    img: mandalaroundcanvas,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: ninearch2,
    title: 'Basketball',
  },
  {
    img: unawatuna,
    title: 'Fern',
  },
  {
    img: madeupscenery01,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: lion01,
    title: 'Tomato basil',
  },
  {
    img: sunsetold,
    title: 'Sea star',
  },
];
export default function CanvasGallery() {
  return (
    <Box sx={{ width: '80%',margin:'auto', height: '100%', overflowY: 'scroll' }}>
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

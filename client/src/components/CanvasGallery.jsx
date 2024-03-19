import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, maxHeight } from '@mui/system';
import imageData from '../constants/canvasGalleryData';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}
const ImageCard = ({ image, title, width, height }) => {
  const { src, srcSet } = srcset(image, width, height);
  return (
    <ImageListItem key={image}>
      <img src={src} srcSet={srcSet} alt={title} loading="lazy" />
    </ImageListItem>
  );
};

export default function CanvasGallery() {
  const imageWidth = 248; 
  const imageHeight = 248; 
  return (
    <Box
      sx={{ width: '80%', margin: 'auto', height: '100%', overflowY: 'scroll' }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageData.map((item) => (
          <ImageCard
            key={item.img}
            image={item.img}
            title={item.title}
            width={imageWidth}
            height={imageHeight}
          />
        ))}
      </ImageList>
    </Box>

    // <Box
    //   sx={{ width: '80%', margin: 'auto', height: '100%', overflowY: 'scroll' }}
    // >
    //   <ImageList variant="masonry" cols={3} gap={8}>
    //     {imageData.map((item) => (
    //       <ImageListItem key={item.img}>
    //         <img
    //           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //           src={`${item.img}?w=248&fit=crop&auto=format`}
    //           alt={item.title}
    //           loading="lazy"
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </Box>
  );
}

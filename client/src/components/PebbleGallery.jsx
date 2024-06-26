import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import pebbleImageData from '../constants/pebbleGalleryData';

export default function PebbleGallery() {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const ImageCard = ({ image, title, width, height }) => {
    const { src, srcSet } = srcset(image, width, height);
    return (
      <ImageListItem key={image}>
        <img src={src} alt={title} loading="lazy" />
      </ImageListItem>
    );
  };
  return (
    <Box
      sx={{ width: '80%', margin: 'auto', height: '100%', overflowY: 'scroll' }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {pebbleImageData.map((item) => (
          <ImageCard key={item.img} image={item.img} title={item.title} />
        ))}
      </ImageList>
    </Box>
  );
}

import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import TestimoniItem from './testimoni-item';

const TestimonialList = () => {
  return (
    <Box ml='15%' mb='100px'>
      <Flex
        sx={{
          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
            borderRadius: '0px',
            backgroundColor: `#fff`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `#fff`,
          },
        }}
        pt='30px'
        alignItems={'center'}
        overflowX='auto'
      >
        {Array(10)
          .fill('')
          .map((_, i) => (
            <TestimoniItem key={i} />
          ))}
      </Flex>
    </Box>
  );
};

export default TestimonialList;

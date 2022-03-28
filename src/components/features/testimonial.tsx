import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';
import TestimoniItem from './testimoni-item';
import TestimonialList from './testimonial-list';

const Testimonial = () => {
  return (
    <>
      <Container mb='45px'>
        <Text
          mb='25px'
          align='center'
          textTransform={'uppercase'}
          color='#3734A9'
          fontWeight={'extrabold'}
        >
          Testimonial
        </Text>
        <Heading textAlign={'center'} mb='24px' as='h2' fontWeight={'bold'} fontSize='54px'>
          What Our Happy
          <br /> User Says
        </Heading>
      </Container>
      <TestimonialList />
    </>
  );
};

export default Testimonial;

import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Container from './container';

const Navbar = () => {
  return (
    <Container py='20px'>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'20px'}>ARSHAKIR</Heading>
        <HStack>
          <Text fontWeight={'bold'}>Product</Text>
          <Text fontWeight={'bold'}>Packages</Text>
          <Text fontWeight={'bold'}>Blog</Text>
          <Text fontWeight={'bold'}>Testimonial</Text>
        </HStack>
        <HStack>
          <Button>Sign In</Button>
          <Button>Start Free</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

import { Box, ChakraProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends ChakraProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box w='full' maxW={'container.xl'} mx='auto' px='20px' {...rest}>
      {children}
    </Box>
  );
};

export default Container;

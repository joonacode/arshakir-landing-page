import { Box, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const CTA = () => {
  return (
    <Box
      bgImage={'./images/bg_cta.png'}
      backgroundPosition='center'
      backgroundSize={'cover'}
      height='578px'
      display={'flex'}
      alignItems='center'
    >
      <Container>
        <Box rounded='xl' w='594px' p='54px' backgroundColor={'#3734A9'}>
          <Text color='#DEE1E6' fontSize={'14px'} mb='13px' textTransform={'uppercase'}>
            Join with our Community
          </Text>
          <Text mb='22px' color='white' fontSize={'30px'} fontWeight='bold'>
            Set your social media
            <br /> growth on autopilot.
          </Text>
          <InputGroup size={'lg'}>
            <Input
              backgroundColor={'white'}
              opacity={0.6}
              type='tel'
              placeholder='YOUR EMAIL ADDRESS'
            />
            <InputRightAddon backgroundColor={'#FF7F5C'} border='1px solid #FF7F5C'>
              <Text fontSize='sm' color='white'>
                SUBSCRIBE
              </Text>
            </InputRightAddon>
          </InputGroup>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;

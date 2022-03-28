import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const SectionImageRight = () => {
  return (
    <Container>
      <Flex alignItems={'center'}>
        <Box width={'50%'}>
          <Heading mb='24px' as='h2' fontWeight={'bold'} fontSize='54px'>
            Get thousands of active followers
          </Heading>
          <Text mb='65px'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
            blessing. Indulgence way everything joy alteration boisterous the attachment.
          </Text>
          <Box position={'relative'}>
            <Button colorScheme={'blue'}>Start Free</Button>
            <Image
              src='./images/line.svg'
              alt='line'
              position={'absolute'}
              left='140px'
              top='-55px'
            />
          </Box>
        </Box>
        <Box flex='1'>
          <Image src='./images/img-right.png' alt='followers section' />
        </Box>
      </Flex>
    </Container>
  );
};

export default SectionImageRight;

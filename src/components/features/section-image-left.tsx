import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const SectionImageLeft = () => {
  return (
    <Container mt='-100px'>
      <Flex alignItems={'center'}>
        <Box flex='1' ml='-150px'>
          <Image src='./images/img-left.png' alt='sosmed section' />
        </Box>
        <Box width={'50%'}>
          <Heading mb='24px' as='h2' fontWeight={'bold'} fontSize='54px'>
            Daily active users on social media{' '}
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
      </Flex>
    </Container>
  );
};

export default SectionImageLeft;

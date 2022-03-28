import { Avatar, AvatarGroup, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Container from './container';

const Hero = () => {
  return (
    <Container mt='50'>
      <Flex alignItems={'center'} justifyContent='space-between'>
        <Box width={'40%'}>
          <Heading mb='18px' fontSize={'66px'} as='h2' fontWeight={'extrabold'}>
            Increase your followers on social media
          </Heading>
          <Text mb='20px' fontSize={'18px'} fontWeight={'medium'}>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
            blessing. Indulgence way everything joy alteration boisterous the attachment.
          </Text>
          <Button mb='49px' colorScheme={'blue'}>
            Get Started
          </Button>
          <AvatarGroup size='md' max={6}>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </AvatarGroup>
          <Text mt='18px'>
            12,000+ people already joined the arshakir’s
            <br /> increase followers plan. Get started today!
          </Text>
        </Box>
        <Box flex='1'>
          <Image src='./images/hero.png' alt='hero' />
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;

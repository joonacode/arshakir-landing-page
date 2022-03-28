import { Box, Button, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const Footer = () => {
  return (
    <Box color='white' background={'#1B1C31'}>
      <Container
        py='90px'
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
        flexDir='column'
      >
        <Heading mb='35px' as='h2' textAlign={'center'} fontWeight={'medium'} fontSize='44px'>
          Join millions of
          <br /> creative people with Shakir{' '}
        </Heading>
        <Button colorScheme={'orange'}>Join The Waitlist</Button>
      </Container>
      <Box h='1px' w='full' background={'#404444'} />
      <Container pt='80px' pb='100px'>
        <Flex>
          <Box w='50%'>
            <Text fontWeight={'bold'} fontSize={'20px'} mb='18px'>
              AR SHAKIR
            </Text>
            <Text fontWeight={'normal'} opacity={0.4}>
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
              blessing. Indulgence way everything joy alteration boisterous the attachment.
            </Text>
          </Box>
          <Box flex='1'>
            <SimpleGrid columns={3}>
              <Box>
                <Text mb='35px' fontSize={'21px'} fontWeight='bold'>
                  Company
                </Text>
                <VStack alignItems={'flex-start'} spacing='16px'>
                  <Text>About Us</Text>
                  <Text>Careers</Text>
                  <Text>Blog</Text>
                  <Text>Pricing</Text>
                </VStack>
              </Box>
              <Box>
                <Text mb='35px' fontSize={'21px'} fontWeight='bold'>
                  Product
                </Text>
                <VStack alignItems={'flex-start'} spacing='16px'>
                  <Text>Facebook Followers</Text>
                  <Text>Instagram Followers</Text>
                  <Text>Twitter Followers</Text>
                  <Text>TikTok Followers</Text>
                </VStack>
              </Box>
              <Box>
                <Text mb='35px' fontSize={'21px'} fontWeight='bold'>
                  Resources
                </Text>
                <VStack alignItems={'flex-start'} spacing='16px'>
                  <Text>Proposal Template</Text>
                  <Text>Invoices</Text>
                  <Text>Tuturoial</Text>
                  <Text>How to increase activity</Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
      <Box h='1px' w='full' background={'#404444'} />
      <Container py='30px' display={'flex'} alignItems='center' justifyContent={'space-between'}>
        <Text>2022 ARShakir Inc. All rights reserved. -- Privacy Policy - Terms of Services</Text>
        <Text>
          Supported by <b>Microsoft Startup</b>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;

import { Avatar, Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';

const TestimoniItem = () => {
  return (
    <Box mr='30px'>
      <Box pos={'relative'} w='390px' border='1px solid #ededed' shadow={'sm'}>
        <Box
          background={'#3734A9'}
          h='54px'
          w='54px'
          rounded='full'
          position={'absolute'}
          left='30px'
          top='-30px'
          display={'flex'}
          alignItems='center'
          justifyContent={'center'}
        >
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.9851 0.509139L17.5751 3.50214C16.5091 3.42014 15.7301 3.63881 15.2381 4.15814C14.7461 4.67747 14.4454 5.37447 14.3361 6.24914C14.2267 7.12381 14.1994 8.06681 14.2541 9.07814H17.9851V17.7291H10.9741V7.43814C10.9741 4.92347 11.6027 3.03747 12.8601 1.78014C14.1447 0.522807 15.8531 0.0991398 17.9851 0.509139ZM7.57106 0.509139L7.16106 3.50214C6.09506 3.42014 5.31606 3.63881 4.82406 4.15814C4.33206 4.67747 4.03139 5.37447 3.92206 6.24914C3.81273 7.12381 3.78539 8.06681 3.84006 9.07814H7.57106V17.7291H0.560059V7.43814C0.560059 4.92347 1.18873 3.03747 2.44606 1.78014C3.73073 0.522807 5.43906 0.0991398 7.57106 0.509139Z'
              fill='white'
            />
          </svg>
        </Box>
        <Box px='30px' mt='40px' mb='20px'>
          <HStack mb='15px'>
            <Image src='./icons/star.svg' alt='star' />
            <Image src='./icons/star.svg' alt='star' />
            <Image src='./icons/star.svg' alt='star' />
            <Image src='./icons/star.svg' alt='star' />
            <Image src='./icons/star.svg' alt='star' />
          </HStack>
          <Text>
            On the other hand, we denounce with righteous indignation and dislike men who are so
            beguiled and.
          </Text>
        </Box>
        <Box borderTop='1px solid #ededed'>
          <HStack spacing={'15px'} my='17px' px='30px'>
            <Box>
              <Avatar src='https://bit.ly/code-beast' size={'md'} />
            </Box>
            <Box>
              <Text fontWeight={'bold'}>Serhiy Hipskyy</Text>
              <Text>CEO Universal</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimoniItem;

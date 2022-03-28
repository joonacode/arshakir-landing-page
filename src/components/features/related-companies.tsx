import { Box, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const RelatedCompanies = () => {
  const listCompany = [
    {
      src: 'c1.svg',
      name: 'open zeppelin',
    },
    {
      src: 'c2.svg',
      name: 'oracle',
    },
    {
      src: 'c3.svg',
      name: 'morpheus',
    },
    {
      src: 'c4.svg',
      name: 'samsung',
    },
    {
      src: 'c5.svg',
      name: 'monday.com',
    },
    {
      src: 'c6.svg',
      name: 'segment',
    },
    {
      src: 'c7.svg',
      name: 'protonet',
    },
  ];

  return (
    <Box>
      <Heading mb='73px' fontSize={'22px'} textAlign='center' px='10px' as='h5'>
        Trusted By Over 100+ Startups and freelance business
      </Heading>
      <HStack spacing={'50px'} justifyContent={'center'} alignItems='center'>
        {listCompany.map((item, i) => (
          <Box key={i}>
            <Image src={`./images/companies/${item.src}`} alt={item.name} />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default RelatedCompanies;

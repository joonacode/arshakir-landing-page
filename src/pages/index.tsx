import { Box } from '@chakra-ui/react';
import { Hero, Navbar } from '@components/common';
import { RelatedCompanies } from '@components/features';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Box h='1px' mt='69px' mb='70px' w='full' background={'#E3E6E9'} />
      <RelatedCompanies />
    </div>
  );
};

export default Home;

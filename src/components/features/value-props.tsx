import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const ValueProps = () => {
  const listValue = [
    {
      icon: 'security.svg',
      title: '100% Secure',
      desc: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.',
    },
    {
      icon: 'cookie.svg',
      title: 'No Cookies Required',
      desc: 'Age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.',
    },
    {
      icon: 'up.svg',
      title: 'Login Info Not Required',
      desc: 'Draw mrs like. Improving end distrusts may instantly was household applauded incommode.',
    },
    {
      icon: 'money.svg',
      title: 'Moneyback Guarrentee',
      desc: 'Improving end distrusts may instantly was from they fine john he give of rich he. They age and draw mrs like. ',
    },
  ];

  return (
    <Container mb='79px'>
      <Heading mb='50px' fontWeight={'extrabold'} as='h3' fontSize={'30px'}>
        One platform to increase
        <br /> followers on all social media.
      </Heading>
      <SimpleGrid columns={4} spacing='34px'>
        {listValue.map((item, i) => (
          <ValuePropsItem {...item} key={i} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

type Props = {
  icon: string;
  title: string;
  desc: string;
};

const ValuePropsItem: React.FC<Props> = ({ icon, title, desc }) => {
  return (
    <Box>
      <Image height={'40px'} width={'40px'} src={`./icons/${icon}`} alt={title} />
      <Text fontWeight={'semibold'} fontSize='22px' my='17px'>
        {title}
      </Text>
      <Text>{desc}</Text>
    </Box>
  );
};

export default ValueProps;

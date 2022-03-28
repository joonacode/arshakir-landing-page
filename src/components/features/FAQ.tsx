import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Container } from '@components/common';
import React from 'react';

const FAQ = () => {
  const listFAQ = [
    {
      title: 'How this work?',
      desc: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.',
    },
    {
      title: 'Are there any additional fee?',
      desc: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.',
    },
    {
      title: 'How can I get the app?',
      desc: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.',
    },
    {
      title: 'What features do you offer and other not?',
      desc: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.',
    },
  ];

  return (
    <Container my='140px'>
      <Flex alignItems={'center'}>
        <Box w='40%' mr='102px'>
          <Heading mb='60px' as='h2' fontWeight={'bold'} fontSize='54px'>
            Any questions ?
            <br /> We got you.
          </Heading>
          <Text mb='47px'>
            Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing.
            Indulgence way everything joy alteration boisterous the attachment.
          </Text>
          <Text fontWeight={'extrabold'} color='purple.500'>
            More FAQs
          </Text>
        </Box>
        <Box flex='1'>
          <Accordion index={0} defaultIndex={[0]} allowToggle>
            {listFAQ.map((item, i) => (
              <AccordionItem key={i} tabIndex={i}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.desc}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Container>
  );
};

export default FAQ;

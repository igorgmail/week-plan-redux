import React, { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import StyleColorMode from '../StyleColorMode/StyleColorMode';
export default function Navbar() {
  useEffect(() => {
    console.log("---Render Navbar");
  })
  return (
    <Flex w='100%' h='3rem' p={'.5rem'} backgroundColor={'custom.navBar.light'} mb={['1rem', '2rem']} justifyContent={'space-between'} alignItems={'center'}>
      <StyleColorMode></StyleColorMode>
      <Heading as='h3' size='md' color={'white'}>
        Todo
      </Heading>
    </Flex>
  )
}
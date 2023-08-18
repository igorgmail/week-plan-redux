import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { Flex, Heading } from '@chakra-ui/react';
import StyleColorMode from '../StyleColorMode/StyleColorMode';

const Navbar = React.memo(() => {

  const [modalHeight, setModalHeight] = useState(window.innerHeight);

  const title = useSelector((store) => store.title)
  useEffect(() => {
    console.log("---Render Navbar");
  })
  // Обработчик изменения размера окна
  const handleResize = () => {
    setModalHeight(window.innerHeight);
  };

  useEffect(() => {
    // Добавление обработчика события при монтировании компонента
    window.addEventListener('resize', handleResize);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Flex w='100%' h='3rem' p={'.5rem'} backgroundColor={'custom.navBar.light'} mb={['1rem', '2rem']} justifyContent={'space-between'} alignItems={'center'}>
      <StyleColorMode></StyleColorMode>
      <Heading as='h3' size='md' color={'white'}>
        <span>{modalHeight}</span>
        {'  '}
        {title}
      </Heading>
    </Flex>
  )
})

export default Navbar;
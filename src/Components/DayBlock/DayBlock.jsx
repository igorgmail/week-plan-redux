import React, { useEffect } from "react"
import { useState, useReducer } from 'react';

import { Flex, Button, Box } from "@chakra-ui/react";
import WhatDayBlock from "../WhatDayBlock/WhatDayBlock";

import reducer from '../../store/reducers/taskReducer'

export default function DayBlock() {
  console.log("---Render DayBlock");

  const [whatDay, setWhatDay] = useState(2) // Сегодня = 2
  const font = ['0.8rem', '1rem']

  return (
    <Box w={'100%'}>

      <Flex w={'100%'} flexDirection={'row'} justifyContent={'center'} gap={1} m={'1rem auto'}>

        <Button transform={whatDay === 1 && 'translateY(10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => setWhatDay(1)}>Прошлое</Button>
        <Button transform={whatDay === 2 && 'translateY(10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => setWhatDay(2)}>Сегодня</Button>
        <Button transform={whatDay === 3 && 'translateY(10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => setWhatDay(3)}>Завтра</Button>
        <Button transform={whatDay === 4 && 'translateY(10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => setWhatDay(4)}>Неделя</Button>
      </Flex>
      <WhatDayBlock whatDay={whatDay}></WhatDayBlock>
    </Box>
  )
}
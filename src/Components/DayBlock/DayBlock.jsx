import React from "react"

import { useDispatch, useSelector } from "react-redux";

import { Flex, Button, Box } from "@chakra-ui/react";
import WhatDayBlock from "../WhatDayBlock/WhatDayBlock";
import { setPage } from "../../store/reducers/appReducer";


export default function DayBlock() {
  console.log("---Render DayBlock");

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)

  const font = ['0.8rem', '1rem']

  const chooseDayHandler = (day) => {
    dispatch(setPage(day))
  }

  return (
    <Box w={'100%'}>

      <Flex w={'100%'} flexDirection={'row'} justifyContent={'center'} gap={['0.8rem', '1.5rem', '2rem']} m={'2rem auto'}>

        <Button transform={pageNum === 1 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(1)}>Прошлое</Button>
        <Button transform={pageNum === 2 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(2)}>Сегодня</Button>
        <Button transform={pageNum === 3 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(3)}>Завтра</Button>
        <Button transform={pageNum === 4 && 'translateY(-10px)'} p={['0.5rem', '1rem']} fontSize={font} variant={'outline'} colorScheme="teal" onClick={() => chooseDayHandler(4)}>Неделя</Button>
      </Flex>
      <WhatDayBlock pageNum={pageNum}></WhatDayBlock>
    </Box>
  )
}
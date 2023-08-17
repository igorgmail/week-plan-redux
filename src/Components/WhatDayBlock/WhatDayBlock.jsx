import React, { useEffect } from "react"
import { useState, useReducer } from 'react';

import { Flex, Center, Box, InputGroup } from "@chakra-ui/react";

export default function WhatDayBlock({ whatDay }) {
  console.log("---Render WhatDayBlock");

  const text = (whatDay) => {
    switch (whatDay) {
      case 1:
        return 'Задачи из Прошлого'
      case 2:
        return 'Задачи на Сегодня'
      case 3:
        return 'Задачи на Завтра'
      case 4:
        return 'Задачи на эту Неделю'
      default:
        break;
    }
  }
  return (
    <Center>

      <Box
        borderRadius={'8px'}
        borderBottom={'2px solid'} borderColor={'custom.navBar.light'}
        w={['80%', '50%']} textAlign={'center'} mb={'1rem'}>

        {text(whatDay)}

      </Box>


    </Center >
  )
}
import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useContext, useState, useCallback } from "react"
import Context from '../../context/todoContext'
import { Box, Input, InputGroup, Badge, Flex } from "@chakra-ui/react";

import Task from "../Task/Task"
import AllTaskSettingModal from "../AllTaskSettingModal/AllTaskSettingModal";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

export default function TaslList({ activeMenu }) {

  // const [isAllTaskModalOpen, setIsAllTaskModalOpen] = useState(false);
  const { visibleList } = useContext(Context);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    console.log("----Render TaskList");

  })

  const activeBage = ((activeMenu) => {
    if (activeMenu === 'all') return { text: 'Все Задачи', color: 'custom.task_all' }
    if (activeMenu === 'done') return { text: 'Завершено', color: 'custom.task_done' }
    if (activeMenu === 'work') return { text: 'Сделать', color: 'custom.task_todo' }
  })(activeMenu)

  return (

    <Box border={'1px'} padding={'.5rem'} borderRadius={'8px'} w={['90%', '90%', '60%']} m={'1.5rem auto'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'1rem'}>
        <Badge textAlign={'center'} backgroundColor={activeBage.color} color={'white'} mb={['10px', '1rem', '2rem']}>{activeBage.text}</Badge>
        {/* Modal Для всех задач */}
        <AllTaskSettingModal isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />

      </Flex>
      <Flex alignItems={'center'} justifyContent={'space-between'} mb={'1rem'}>
        <AddTaskModal></AddTaskModal>
      </Flex>

      {visibleList.length
        ?
        (visibleList.map((el, ind) => (
          <Task itemData={[el, ind]} key={uuidv4()} data={ind}></Task>
        )))
        :
        (
          // Если нет задач
          <InputGroup w={'50%'} m={'auto'} mt={'2rem'} border='2px' borderColor='gray.400' borderRadius={'8px'}>
            <Input fontWeight={'500'} readOnly={true} defaultValue={'Нет Задач'} textDecoration={'none'} textAlign={'center'} />
          </InputGroup>
        )
      }

    </Box>

  )
}
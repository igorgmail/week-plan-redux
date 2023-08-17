import React from "react"
import { useEffect } from "react"

import { Container, Button, Grid, GridItem } from '@chakra-ui/react'

import AddTaskModal from "../AddTaskModal/AddTaskModal"
const Menu = React.memo(({ setActiveMenuHandler }) => {

  useEffect(() => {
    console.log("----Render Menu");
  })


  return (
    <>
    <Container>

        <Grid templateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr 1fr']} gap={2}>
          <GridItem w='100%' h='10' rowSpan={1} >
            <Button w={'100%'} backgroundColor={'custom.task_all'} color={'white'} fontSize={['.8rem', '1rem']} onClick={() => { setActiveMenuHandler('all') }}>Все задачи</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'custom.task_todo'} color={'white'} fontSize={['.8rem', '1rem']} size='md' onClick={() => { setActiveMenuHandler('work') }}>Сделать</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button w={'100%'} backgroundColor={'custom.task_done'} color={'white'} fontSize={['.8rem', '1rem']} size='md' onClick={() => { setActiveMenuHandler('done') }}>Завершенно</Button>
          </GridItem>
          <GridItem w={['30%', '100%']} m={'auto'} h='10' rowSpan={1} colSpan={['3', '1']} >


            <AddTaskModal></AddTaskModal>
          </GridItem>
        </Grid>

    </Container>
    </>
  )
})

export default Menu
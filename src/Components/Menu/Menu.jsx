import React from "react"
import { useEffect, useState } from "react"

import { Container, Button, Grid, GridItem } from '@chakra-ui/react'

const Menu = React.memo(({ setActiveMenuHandler }) => {
  const [activeMenu, setActiveMenu] = useState(2)

  const menuToogleHandler = (value) => {
    setActiveMenu(value)
    if (value === 1) setActiveMenuHandler('done')
    if (value === 2) setActiveMenuHandler('all')
    if (value === 3) setActiveMenuHandler('work')
  }
  useEffect(() => {
    console.log("---Render Menu");
  })


  return (
    <>
      <Container>
        <Grid templateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr']} gap={2} mt={'0.5rem'}>
          <GridItem w='100%' h='10'  >
            <Button
              transform={activeMenu === 1 && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_done'} color={'white'} fontSize={['.8rem', '1rem']} size='md'
              onClick={() => menuToogleHandler(1)}>Завершенно</Button>
          </GridItem>
          <GridItem w='100%' h='10' rowSpan={1} >
            <Button
              transform={activeMenu === 2 && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_all'} color={'white'} fontSize={['.8rem', '1rem']}
              onClick={() => menuToogleHandler(2)}>Все задачи</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button
              transform={activeMenu === 3 && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_todo'} color={'white'} fontSize={['.8rem', '1rem']} size='md'
              onClick={() => menuToogleHandler(3)}>Сделать</Button>
          </GridItem>

        </Grid>

    </Container>
    </>
  )
})

export default Menu
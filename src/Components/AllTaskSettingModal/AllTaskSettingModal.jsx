import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
import { Button, Flex } from "@chakra-ui/react"
import { SettingsIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'

// Button
import CloseButton from "./Button/CloseButton" 

// actions
import actions from "../../store/reducers/actionsGenerate"


const AllTaskSettingModal = React.memo(({ visibleList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  // AllDone for modal Все выполненны tru || false не все выполненны
  const [statusAll, setStatusAll] = useState()

  const checkAllHandler = (statusCheckAll) => {
    // Отмечаем все
    if (!statusCheckAll) {
      dispatch(actions.checkAllDone(pageNum, true))
      onClose()
    }
    // Снимаем метки со всех
    if (statusCheckAll) {
      dispatch(actions.checkAllDone(pageNum, false))
      onClose()
    }
  }

  const deleteAllHandler = () => {
    console.log("DELETE ALl Handler");
    onClose()
  }

  useEffect(() => {
    console.log("---Render Modal All Task Setting");
  })

  useEffect(() => {
    const statusAllDoneForModal = !visibleList.some((el) => el.status === 'work')
    setStatusAll(statusAllDoneForModal)
  })


  return (
    <>
      <SettingsIcon onClick={onOpen} cursor={'pointer'} fontSize={'1.3rem'}></SettingsIcon>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent m={'auto 1rem'}>
          <ModalHeader>Все Задачи</ModalHeader>
          <ModalCloseButton />
          <ModalBody m={3}>

            <Flex w={'100%'} justifyContent={'space-between'} flexDirection={'column'} gap={4}>
              <Button onClick={() => checkAllHandler(statusAll)} color={'white'} backgroundColor={'#2a9d8f'}>
                {statusAll ? ('Отменить Все') : ('Выделить Все')
                }
              </Button>
              <Button onClick={() => deleteAllHandler()} color={'white'} backgroundColor={'#f4a261'}>Удалить все</Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <CloseButton closeModal={onClose}></CloseButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
})

export default AllTaskSettingModal
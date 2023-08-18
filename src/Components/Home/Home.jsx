import React, { useCallback, useEffect } from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import DayBlock from "../DayBlock/DayBlock"
import TaslList from "../TaskList/TaslList"


export default function Home() {

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  let stateList = useSelector((store) => store.tasks)

  console.log("▶ ⇛ stateList:", stateList);

  const [filterNameState, setFilterNameState] = useState('none') // Применяем фильтр
  const [activeMenu, setActiveMenu] = useState('all') // Активное меню первоначально Все задачи(all)

  const setActiveMenuHandler = useCallback((value) => {
    if (value === 'all') {
      setFilterNameState('none'); setActiveMenu('all')
    }
    if (value === 'done') {
      setFilterNameState('done'); setActiveMenu('done')
    }
    if (value === 'work') {
      setFilterNameState('work'); setActiveMenu('work')
    }
  }, [])


  // При каждом перерендере компонента(При каждом изменении фильтра(Выборе меню))
  // Формируется копия оригинального state отфильтрованная с применением фильтра
  const visibleList = ((filterNameState) => {
    if (filterNameState === 'none') return stateList
    if (filterNameState === 'done') return stateList.filter((el) => el.status === 'done')
    if (filterNameState === 'work') return stateList.filter((el) => el.status === 'work')
  })(filterNameState)
  console.log("▶ ⇛ visibleList:", visibleList);


  useEffect(() => {

    console.log("---Render Home");
    localStorage.setItem('wp_day', JSON.stringify(stateList));

  })

  return (

    <>
      <Navbar />
      <DayBlock></DayBlock>
      <Menu setActiveMenuHandler={setActiveMenuHandler} />
      <TaslList activeMenu={activeMenu} visibleList={visibleList} />
    </>


  )
}
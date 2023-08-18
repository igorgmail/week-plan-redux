import React, { useCallback, useEffect } from "react"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../Navbar/Navbar"
import Menu from "../Menu/Menu"
import DayBlock from "../DayBlock/DayBlock"
import TaslList from "../TaskList/TaslList"

import { setVisibleTask } from "../../store/reducers/visibleTaskReducer";

export default function Home() {

  console.log("---Render Home");

  const dispatch = useDispatch()
  const pageNum = useSelector((store) => store.app.page)
  console.log("▶ ⇛ pageNum:", pageNum);
  let stateList = useSelector((store) => store.tasks)


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
    localStorage.setItem('wp_today', JSON.stringify(stateList));

  }, [stateList])

  return (

    <>
      <Navbar />
      <DayBlock></DayBlock>
      <Menu setActiveMenuHandler={setActiveMenuHandler} />
      <TaslList activeMenu={activeMenu} visibleList={visibleList} />
    </>


  )
}
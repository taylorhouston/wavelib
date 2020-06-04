import React, { useState } from 'react'
import { WField, WTextField, WButton, WModal, WOptionButton, WSelectBox } from 'wavelib'
const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const openModalHandler = () => {
    setOpenModal(true)
  }

  const closeHandler = () => {
    setOpenModal(false)
  }

  return <>
    <WField />
    <WButton>Text</WButton>
    <WButton type='link'>A Link</WButton>
    <WTextField text='test within WTextField' />
    <WTextField text='test with overlap' overlap={true} />
    <WTextField type='textarea' text='Text Area' overlap={true} height='6' />
    <WOptionButton type='radio' text='Radio button' />
    <WOptionButton type='checkbox' text='Checkbox' />
    <WModal show={openModal} closeHandler={closeHandler}>Stuff and not closable</WModal>
    <WButton type='button' clickHandler={openModalHandler}>open Modal!</WButton>
    <WSelectBox />
  </>
}

export default App

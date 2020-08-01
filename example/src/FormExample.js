import React, {useState, useEffect} from 'react'
import {useFormLogic} from "wavelib";
import { WField, WTextField, WButton, WModal, WOptionButton, WSelectBox } from 'wavelib'
export const FormExample = () => {
  const {
    setUrl,
    setFormName,
    handleChange,
    handleSubmit,
    selector
  } = useFormLogic()

  useEffect(() => {
    setUrl('/api/contact')
    setFormName('exampleForm')
  }, [setUrl, setFormName])


  const [openModal, setOpenModal] = useState(false)
  const openModalHandler = () => {
    setOpenModal(true)
  }

  const closeHandler = () => {
    setOpenModal(false)
  }

  return <form onSubmit={handleSubmit}>
    <WField />
    <WButton>Text</WButton>
    <WButton type='link'>A Link</WButton>
    <WTextField text='test within WTextField' />
    <WTextField text='test with overlap' />
    <WTextField type='textarea' text='Text Area' height='6' />
    <WOptionButton id='testRadioId' name='apple' type='radio' text='Radio button' changeHandler={handleChange} checked={true} />
    <WOptionButton id='testRadioId2' name='apple' type='radio' text='Radio button 2' changeHandler={handleChange} checked={false} />
    <WOptionButton type='checkbox' text='Checkbox' />
    <WModal show={openModal} closeHandler={closeHandler}>Stuff and not closable</WModal>
    <WButton type='button' clickHandler={openModalHandler}>open Modal!</WButton>
    <WSelectBox />
  </form>
}

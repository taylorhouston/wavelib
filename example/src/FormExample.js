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
    <WField name='testField' changeHandler={handleChange} />
    <WButton>Text</WButton>
    <WButton type='link'>A Link</WButton>
    <WTextField text='test within WTextField' name='wfield' changeHandler={handleChange}  />
    <WTextField text='test with overlap' name='overlap' changeHandler={handleChange}  />
    <WTextField type='textarea' name='textarea' text='Text Area' height='6' changeHandler={handleChange}  />
    <WOptionButton id='testRadioId' value='radio1' name='apple' type='radio' text='Radio button' changeHandler={handleChange} checked={true} />
    <WOptionButton id='testRadioId2' value='radio2' name='apple' type='radio' text='Radio button 2' changeHandler={handleChange} checked={false} />
    <WOptionButton type='checkbox' name='banana' value='checkbox1' text='Checkbox' changeHandler={handleChange} />
    <WModal show={openModal} closeHandler={closeHandler}>Stuff and not closable</WModal>
    <WButton type='button' clickHandler={openModalHandler}>open Modal!</WButton>
    <WSelectBox /><WButton type='submit'>Submit</WButton>

  </form>
}

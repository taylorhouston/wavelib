import React from 'react'
import { WField, WTextField, WButton, WModal, WOptionButton } from 'wavelib'
const App = () => {
  return <>
    <WField />
    <WButton>Text</WButton>
    <WButton type='link'>A Link</WButton>
    <WTextField labelText='test within WTextField' />
    <WTextField labelText='test with overlap' overlap={true} />
    <WTextField type='textarea' labelText='Text Area' overlap={true} height='6' />
    <WOptionButton type='radio' labelText='Radio button' />
    <WOptionButton type='checkbox' labelText='Checkbox' />
    <WModal show='true'>Stuff</WModal>
  </>
}

export default App

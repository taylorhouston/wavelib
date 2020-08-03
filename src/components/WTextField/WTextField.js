import React from 'react'
import { WField, WLabel } from '../..'
import styled from 'styled-components'

export const WTextField = ({ id, type, name, changeHandler, text }) => {

  return (
    <Container>
      <WLabel>{text}</WLabel>
      <WField
        id={id}
        type={type}
        name={name}
        changeHandler={changeHandler}
        textarea={false}
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 1rem 0 2rem;
`

WTextField.defaultProps = {
  overlay: false
}

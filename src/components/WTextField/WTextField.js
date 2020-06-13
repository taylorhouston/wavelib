import React from 'react'
import { WField } from '../..'
import { WLabel } from '../WLabel/WLabel'
import styled from 'styled-components'

export const WTextField = ({
  id,
  classes,
  type,
  name,
  onChange,
  text,
}) => {
  const changeHandler = () => {
    onChange()
  }

  return (
    <Container>
      <WLabel>{text}</WLabel>
      <WField
        id={id}
        type={type}
        name={name}
        onChange={changeHandler}
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

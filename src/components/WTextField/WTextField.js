import React from 'react'
import { WField, WLabel } from '../..'
import styled from 'styled-components'

export const WTextField = ({ id, type, name, changeHandler, text, error }) => {
  return (
    <Container>
      <WLabel>{text}</WLabel>
      <WField id={id} type={type} name={name} changeHandler={changeHandler} />
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </Container>
  )
}

const Container = styled.div`
  margin: 1rem 0 2rem;
`

const ErrorContainer = styled.div`
  color: ${(props) => props.theme.colors.highlight};
`

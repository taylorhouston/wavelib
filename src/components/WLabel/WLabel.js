import React from 'react'
import styled from 'styled-components'
export const WLabel = styled.label`
  color: props.primary;
  font-size: 1.4rem;
`

export const WLabelWithOverlap = styled.WLabel`
  position: relative;
  top: -1rem
`
import React from 'react'

export const WLabel = () => (
  <Label></Label>
)

const Label = styled.label`

`

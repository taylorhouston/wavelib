import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding: 0 0.5rem 0 0;
`

const WLabelWithOverlap = styled(Label)`
  position: relative;
  top: 0.8rem;
  background-color: #fff;
`

export const WLabel = (props) => {
  return props.overlap ? (
    <WLabelWithOverlap>{props.children}</WLabelWithOverlap>
  ) : (
    <Label>{props.children}</Label>
  )
}

WLabel.defaultProps = {
  overlay: false
}

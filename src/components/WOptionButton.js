import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export const WOptionButton = ({
  name,
  id,
  changeHandler,
  text,
  type,
  testid
}) => {
  return (
    <Label htmlFor={id}>
      {type === 'checkbox' ? (
        <FakeCheckbox role='checkbox' data-testid={testid} />
      ) : (
        <FakeRadio role='radio' data-testid={testid} />
      )}
      {text}
      <HiddenInput
        type={type}
        value='true'
        name={name}
        id={id}
        onChange={changeHandler}
      />
    </Label>
  )
}
const Label = styled.label`
  display: inline-block;
  line-height: 4rem;
  vertical-align: middle;
`

const HiddenInput = styled.input`
  display: none;
`

const FakeCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: 1px solid;
  margin: 0 0.5rem;
  width: 2.6rem;
  height: 2.6rem;
`

const FakeRadio = styled(FakeCheckbox)`
  border-radius: 1.3rem;
`

WOptionButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio'])
}

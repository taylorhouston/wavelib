import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export const WOptionButton = ({
  name,
  id,
  changeHandler,
  text,
  type,
  testid,
  checked
}) => {
  return (
    <Label htmlFor={id}>
      <HiddenInput
        type={type}
        value='true'
        name={name}
        id={id}
        onChange={changeHandler}
      />
      {type === 'checkbox' ? (
        <FakeCheckbox role='checkbox' data-testid={testid} checked={checked}>
          <Checkmark
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 9.08 9.56'
          >
            <polyline
              fill='none'
              strokeWidth='2px'
              stroke='#fff'
              points='8.21 0.49 3.99 7.96 0.68 4.9'
            />
          </Checkmark>
        </FakeCheckbox>
      ) : (
        <FakeRadio role='radio' data-testid={testid} checked={checked}>
          <RadioCenter />
        </FakeRadio>
      )}
      {text}
    </Label>
  )
}
const Label = styled.label`
  display: inline-block;
  line-height: 4rem;
  vertical-align: middle;
  font-size: ${(props) => props.theme.defaults.font};
`
// shared characteristics between Checkbox and Radio buttons
const OptionButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  margin: 0 0.5rem;
  width: 2.6rem;
  height: 2.6rem;
`

const FakeCheckbox = styled(OptionButton)``

const RadioCenter = styled.div`
  border-radius: 1rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${(props) => props.theme.colors.primary};
  visibility: hidden;
`

const FakeRadio = styled(OptionButton)`
  border-radius: 1.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const HiddenInput = styled.input`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  position: absolute;

  &:checked + ${FakeRadio} ${RadioCenter} {
    visibility: visible;
  }

  &:checked + ${FakeCheckbox} {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

const Checkmark = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`

WOptionButton.defaultProps = {
  changeHandler: () =>
    console.log('no changeHandler set for WOptionButton component.')
}

WOptionButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio'])
}

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
      {type === 'checkbox' ? (
        <FakeCheckbox role='checkbox' data-testid={testid} checked={checked} />
      ) : (
        <FakeRadio
          role='radio'
          data-testid={testid}
          checked={checked}
          onChange={changeHandler}
        >
          <RadioCenter />
        </FakeRadio>
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
  font-size: ${(props) => props.theme.defaults.font};
`

const FakeCheckbox = styled.div`
  display: inline-block;
  vertical-align: middle;
  border: 1px solid;
  margin: 0 0.5rem;
  width: 2.6rem;
  height: 2.6rem;
`

const HiddenInput = styled.input`
  //border: 0;
  //clip: rect(0, 0, 0, 0);
  //height: 1px;
  //margin: -1px;
  //overflow: hidden;
  //padding: 0;
  //white-space: nowrap;
  //position: absolute;
`
const RadioCenter = styled.div`
  border-radius: 1rem;
  width: 1.8rem;
  height: 1.8rem;
  background-color: black;
`

WOptionButton.defaultProps = {
  changeHandler: () =>
    console.log('no changeHandler set for WOptionButton component.')
}

const FakeRadio = styled(FakeCheckbox)`
  border-radius: 1.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${RadioCenter} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

WOptionButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio'])
}

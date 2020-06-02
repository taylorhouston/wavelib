import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

export const WOptionButton = ({
  name,
  id,
  changeHandler,
  labelText,
  type,
  testid
}) => {
  return (
    <label htmlFor={id}>
      {type === 'checkbox' ? (
        <FakeCheckbox role='checkbox' data-testid={testid} />
      ) : (
        <FakeRadio role='radio' data-testid={testid} />
      )}
      {labelText}
      <HiddenInput
        type={type}
        value='true'
        name={name}
        id={id}
        onChange={changeHandler}
      />
    </label>
  )
}

const HiddenInput = styled.input`
  display: none;
`

const FakeCheckbox = styled.div`
  border: 1px solid;
  width: 2.6rem;
  height: 2.6rem;
`

const FakeRadio = styled(FakeCheckbox)`
  border-radius: 1.3rem;
`

WOptionButton.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio'])
}

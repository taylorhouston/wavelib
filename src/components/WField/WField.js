import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WField = ({
  name,
  id,
  type,
  autocomplete,
  changeHandler,
  placeholder,
  autofocus,
  disabled,
  rows
}) => {
  const [tempType, setTempType] = useState(type)

  const handleClick = () => {
    if (tempType === 'password') {
      setTempType('text')
    } else {
      setTempType('password')
    }
  }

  const handleChange = (event) => {
    changeHandler({
      name: name,
      value: event.currentTarget.value
    })
  }

  return (
    <div className='Field'>
      {type !== 'textarea' && (
        <Field
          onChange={handleChange}
          type={tempType}
          name={name}
          id={id}
          autocomplete={autocomplete}
          autoFocus={autofocus}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {type === 'textarea' && (
        <TextArea
          name={name}
          autocomplete={autocomplete}
          onChange={handleChange}
          autoFocus={autofocus}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        />
      )}

      {type === 'password' && (
        <button onClick={handleClick}>
          {tempType === 'password' ? 'show' : 'hide'}
        </button>
      )}
    </div>
  )
}
WField.defaultProps = {
  rows: 4,
  disabled: false,
  placeholder: '',
  autofocus: false
}

WField.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password', 'textarea']),
  autocomplete: PropTypes.oneOf(['on', 'off'])
}

const Field = styled.input`
  height: 4rem;
  font-size: ${(props) => props.theme.defaults.font};
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  padding: 0 1.2rem;
  width: 100%;
`

const TextArea = styled.textarea`
  font-size: ${(props) => props.theme.defaults.font};
  width: 100%;
  padding: 1.2rem;
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
`

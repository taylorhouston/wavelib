import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WField = ({ name, id, type, onChange }) => {
  const [tempType, setTempType] = useState(type)

  const handleClick = () => {
    if (tempType === 'password') {
      setTempType('text')
    } else {
      setTempType('password')
    }
  }

  const handleChange = (event) => {
    return {
      name: name,
      value: event.currentTarget.value
    }
  }

  return (
    <div className='Field'>
      <Field
        onChange={handleChange}
        type={tempType}
        name={name}
        id={id}
        className='Field__input'
      />
      {type === 'password' && (
        <button onClick={handleClick}>
          {tempType === 'password' ? 'show' : 'hide'}
        </button>
      )}
    </div>
  )
}

WField.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password'])
}

const Field = styled.input`
  height: 4.8rem
  padding: 0 1.2rem
`

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const WField = ({ name, id, type, onChange, height }) => {
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
      {type !== 'textarea' && (
        <Field onChange={handleChange} type={tempType} name={name} id={id} />
      )}
      {type === 'textarea' && <TextArea height={height} />}

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
  height: 4rem;
  padding: 0 1.2rem;
`

const TextArea = styled.textarea`
  height: ${(props) => props.height || 4}rem;
  width: 100%;
  padding: 1.2rem;
`

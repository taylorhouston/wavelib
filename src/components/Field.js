import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Field = ({ name, id, type, onChange }) => {
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
      <input
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

Field.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password'])
}

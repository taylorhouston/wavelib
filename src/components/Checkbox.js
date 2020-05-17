import React from 'react'
import { PropTypes } from 'prop-types'

export const Checkbox = ({ name, id, changeHandler, labelText }) => {
  return (
    <label htmlFor={id}>
      <div
        role='checkbox'
        data-testid='Checkbox__box'
        className='Checkbox__box'
      />
      {labelText}
      <input
        type='checkbox'
        value='true'
        name={name}
        id={id}
        className='Checkbox__input'
        onChange={changeHandler}
      />
    </label>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  labelTxt: PropTypes.string
}

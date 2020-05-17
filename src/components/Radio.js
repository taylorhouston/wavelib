import React from 'react'

export const Radio = ({ name, id, labelText }) => {
  return (
    <label className='Radio' id={id}>
      <input type='radio' name={name} id={id} className='Radio__input' />
      <div className='Radio__radio' />
      {labelText}
    </label>
  )
}

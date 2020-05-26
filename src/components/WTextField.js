import React from 'react'
import { WField } from './WField'

export const WTextField = ({ id, classes, type, name, onChange, labelText }) => {
  const changeHandler = () => {
    onChange()
  }

  return (
    <div className={`TextField ${classes}`}>
      <label htmlFor={id}>{labelText}</label>
      <WField id={id} type={type} name={name} onChange={changeHandler} />
    </div>
  )
}

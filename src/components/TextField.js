import React from 'react'
import { Field } from './Field'

export const TextField = ({ id, classes, type, name, onChange, labelText }) => {
  const changeHandler = () => {
    onChange()
  }

  return (
    <div className={`TextField ${classes}`}>
      <label htmlFor={id}>{labelText}</label>
      <Field id={id} type={type} name={name} onChange={changeHandler} />
    </div>
  )
}

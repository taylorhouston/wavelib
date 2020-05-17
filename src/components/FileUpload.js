import React from 'react'

export const FileUpload = ({ name, id, labelText }) => {
  return (
    <div className='FileUpload'>
      <label htmlFor={id}>{labelText}</label>
      <input type='file' name={name} id={id} />
    </div>
  )
}

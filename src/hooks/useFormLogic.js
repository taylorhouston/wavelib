import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formSubmitAction, formUpdateAction } from '../actions/formsActions'

export function useFormLogic() {
  const [formName, setFormName] = useState('')
  const [url, setUrl] = useState('')
  const selector = useSelector((state) => state.forms[formName]) || ''
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(formSubmitAction(url, formName))
  }

  const handleChange = (data) => {
    dispatch(formUpdateAction({ ...data, formName: formName }))
  }

  return {
    handleChange,
    handleSubmit,
    setFormName,
    setUrl,
    selector
  }
}

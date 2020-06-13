import {
  FORM_UPDATE,
  FORM_SUBMIT,
  FORM_ERROR,
  FORM_LOADING
} from '../constants/formConstants'

export const formUpdateAction = (data) => {
  return { type: FORM_UPDATE, payload: data }
}

export const formSubmitAction = (url, formName) => {
  return (dispatch, getReduxStore) => {
    dispatch({ type: FORM_LOADING, payload: { formName: formName } })
    fetch(url, {
      method: 'POST',
      mode: 'crs',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getReduxStore().forms[formName])
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        if (data.status !== 200) {
          const payloadObj = { errors: data.errors, formName: formName }
          return dispatch({ type: FORM_ERROR, payload: payloadObj })
        } else {
          dispatch({ type: FORM_SUBMIT, payload: data })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

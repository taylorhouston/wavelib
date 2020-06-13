import {
  FORM_SUBMIT,
  FORM_UPDATE,
  FORM_ERROR,
  FORM_LOADING
} from '../constants/formConstants'

const initialState = {}

export const formsReducer = (reduxState = initialState, action) => {
  switch (action.type) {
    case FORM_UPDATE: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          [action.payload.name]: action.payload.value
        }
      }
    }
    case FORM_SUBMIT: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          status: true
        }
      }
    }
    case FORM_ERROR: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          errors: action.payload.errors,
          status: false
        }
      }
    }
    case FORM_LOADING: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          status: true
        }
      }
    }
    default: {
      return reduxState
    }
  }
}

import {
  FORM_UPDATE,
  FORM_ERROR,
  FORM_LOADING,
  FORM_CLEAR,
  FORM_SUCCESS
} from '../constants/formConstants'
import { HYDRATE } from 'next-redux-wrapper'
const initialState = {}

export const formsReducer = (reduxState = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...reduxState,
        ...action.payload
      }
    }
    case FORM_UPDATE: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          [action.payload.name]: action.payload.value
        }
      }
    }
    case FORM_ERROR: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          errors: action.payload.errors,
          loading: false
        }
      }
    }
    case FORM_LOADING: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          loading: action.payload.loading
        }
      }
    }
    case FORM_SUCCESS: {
      return {
        ...reduxState,
        [action.payload.formName]: {
          ...reduxState[action.payload.formName],
          success: true
        }
      }
    }
    case FORM_CLEAR: {
      console.log('formReducer FORM_CLEAR', action)
      return {
        ...reduxState,
        [action.payload.formName]: { success: true }
      }
    }
    default: {
      return reduxState
    }
  }
}

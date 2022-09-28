import * as actionTypes from './constants'

export const changeTest = (page) => {
  return {
    type: actionTypes.TEST,
    page
  }
}

import * as actionTypes from './constants'

const initialState = {
  currentPage: 3
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEST:
      return { ...state, currentPage: action.page }
    default:
      return state
  }
}

export default reducer

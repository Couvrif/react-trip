import * as actionTypes from './constants'

const initialState = {
  page: 0,
  total: 0,
  roomlist: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGEPAGE:
      return { ...state, page: action.page }
    case actionTypes.CHANGETOTAL:
      return { ...state, total: action.total }
    case actionTypes.CHANGEROOMLIST:
      return { ...state, roomlist: action.roomlist }
    default:
      return state
  }
}

export default reducer

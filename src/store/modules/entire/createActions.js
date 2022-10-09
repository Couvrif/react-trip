import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

export const changePageAction = (page) => {
  return {
    type: actionTypes.CHANGEPAGE,
    page
  }
}

export const changeTotalAction = (total) => {
  return {
    type: actionTypes.CHANGETOTAL,
    total
  }
}

export const changeRoomListAction = (roomlist) => {
  return {
    type: actionTypes.CHANGEROOMLIST,
    roomlist
  }
}

export const changeLoadingAction = (isLoading) => {
  return {
    type: actionTypes.CHANGELOADING,
    isLoading
  }
}

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    dispatch(changeLoadingAction(true))
    const currentPage = getState().entire.page
    const res = await getEntireRoomList(currentPage)
    dispatch(changeLoadingAction(false))
    const { list, totalCount } = res
    dispatch(changeRoomListAction(list))
    dispatch(changeTotalAction(totalCount))
  }
}

import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './cpn/entire-filter'
import EntirePagination from './cpn/entire-pagination'
import EntireRooms from './cpn/entire-rooms'
import { EntireWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire

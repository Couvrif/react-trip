import RoomItem from '@/components/room-item'
// import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RoomWrapper } from './style'
import { changeDetailInfoAction } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {
  const { roomlist, total, isLoading } = useSelector((state) => {
    return {
      roomlist: state.entire.roomlist,
      total: state.entire.total,
      isLoading: state.entire.isLoading
    }
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = useCallback(
    (item) => {
      console.log('你第二个来', item)
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )

  return (
    <RoomWrapper>
      <h3 className="title">共{total}多处住宿</h3>
      <div className="list-content">
        {roomlist.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} handleClick={handleClick}></RoomItem>
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms

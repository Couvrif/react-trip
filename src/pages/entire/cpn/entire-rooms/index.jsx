import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { RoomWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomlist, total, isLoading } = useSelector((state) => {
    return {
      roomlist: state.entire.roomlist,
      total: state.entire.total,
      isLoading: state.entire.isLoading
    }
  })
  return (
    <RoomWrapper>
      <h3 className="title">共{total}多处住宿</h3>
      <div className="list-content">
        {roomlist.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms

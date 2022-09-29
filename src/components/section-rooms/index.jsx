import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionRoomWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <SectionRoomWrapper>
      {roomList?.slice(0, 8)?.map((item, index) => {
        return <RoomItem key={index} itemData={item} itemWidth={itemWidth}></RoomItem>
      })}
    </SectionRoomWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRooms

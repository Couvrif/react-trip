import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scroll-view'
import { HomeSectionv3Wrapper } from './style'
import RoomItem from '@/components/room-item'

const HomeSectionv3 = memo((props) => {
  const { roomInfo } = props

  return (
    <HomeSectionv3Wrapper>
      <SectionHeader title={roomInfo.title} subtitle={roomInfo.subtitle}></SectionHeader>
      <div className="room-list">
        <ScrollView>
          {roomInfo.list.map((item) => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </HomeSectionv3Wrapper>
  )
})

HomeSectionv3.propTypes = {
  roomInfo: PropTypes.object
}

export default HomeSectionv3

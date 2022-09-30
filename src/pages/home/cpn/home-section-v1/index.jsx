import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import { HomeSectionv1Wrapper } from './style'

const HomeSectionv1 = memo((props) => {
  const { roomInfo } = props

  return (
    <HomeSectionv1Wrapper>
      <SectionHeader title={roomInfo?.title} subtitle={roomInfo?.subtitle}></SectionHeader>
      <SectionRooms roomList={roomInfo?.list} itemWidth="25%"></SectionRooms>
      <SectionFooter></SectionFooter>
    </HomeSectionv1Wrapper>
  )
})

HomeSectionv1.propTypes = {
  roomInfo: PropTypes.object
}

export default HomeSectionv1

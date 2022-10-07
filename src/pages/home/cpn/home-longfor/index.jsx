import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item'

const HomeLongFor = memo((props) => {
  const { roomInfo } = props

  return (
    <LongForWrapper>
      <SectionHeader title={roomInfo?.title} subtitle={roomInfo?.subtitle}></SectionHeader>
      <div className="info-content">
        <ScrollView>
          {roomInfo.list.map((item) => {
            return <LongForItem itemData={item} key={item.city}></LongForItem>
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  roomInfo: PropTypes.object
}

export default HomeLongFor

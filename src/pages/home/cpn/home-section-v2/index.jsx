import PropTypes from 'prop-types'
import React, { memo,useCallback,useState } from 'react'
import { HomeSectionv2Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionv2 = memo((props) => {

    const { roomInfo } = props

    const initalName=Object.keys(roomInfo.dest_list)[0]
    const [tabName, setTabName] = useState(initalName)

    const clickTabName = useCallback((name, index) => {
        setTabName(name)
    }, [])

    const tabNameList = roomInfo.dest_address?.map((item) => item.name)

  return (
      <HomeSectionv2Wrapper>
          <SectionHeader title={roomInfo.title} subtitle={roomInfo.subtitle}></SectionHeader>
          <SectionTabs tabNameList={tabNameList} tabClick={clickTabName}></SectionTabs>
          <SectionRooms roomList={roomInfo.dest_list?.[tabName]} itemWidth={'33.3%'}></SectionRooms>
          <SectionFooter footerName={tabName}></SectionFooter>
    </HomeSectionv2Wrapper>
  )
})

HomeSectionv2.propTypes = {
    roomInfo:PropTypes.object
}

export default HomeSectionv2
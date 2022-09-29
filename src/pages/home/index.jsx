import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './cpn/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionv1 from './cpn/home-section-v1'

import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const [tabName, setTabName] = useState('佛山')

  const clickTabName = useCallback((name, index) => {
    setTabName(name)
  }, [])

  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => {
    console.log(state)
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }
  }, shallowEqual)

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'))
  }, [dispatch])

  const tabNameList = discountInfo?.dest_address.map((item) => item.name)

  function test() {
    console.log('fdafaf', goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo)
  }

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 折扣数据 */}
        <div className="discount">
          <SectionHeader title={discountInfo?.title} subtitle={discountInfo?.subtitle}></SectionHeader>
          <SectionTabs tabNameList={tabNameList} tabClick={clickTabName}></SectionTabs>
          <SectionRooms roomList={discountInfo?.dest_list?.[tabName]}></SectionRooms>
        </div>

        <div onClick={test}>test</div>

        <HomeSectionv1 roomInfo={goodPriceInfo}></HomeSectionv1>
        <HomeSectionv1 roomInfo={highScoreInfo}></HomeSectionv1>
      </div>
    </HomeWrapper>
  )
})

export default Home

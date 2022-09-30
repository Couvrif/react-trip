import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './cpn/home-banner'
import { isEmptyO } from '@/utils'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionv1 from './cpn/home-section-v1'
import HomeSectionv2 from './cpn/home-section-v2'

const Home = memo(() => {

  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longForInfo, plusInfo } = useSelector((state) => {
    console.log(state)
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo
    }
  }, shallowEqual)

  // 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        {/* 折扣数据 */}
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}></SectionHeader>
          <SectionTabs tabNameList={tabNameList} tabClick={clickTabName}></SectionTabs>
          <SectionRooms roomList={discountInfo.dest_list?.[tabName]} itemWidth={'33.3%'}></SectionRooms>
        </div> */}

        {isEmptyO(discountInfo) && <HomeSectionv2 roomInfo={discountInfo}></HomeSectionv2>}
        {isEmptyO(hotRecommendInfo) && <HomeSectionv2 roomInfo={hotRecommendInfo}></HomeSectionv2>}

        {isEmptyO(goodPriceInfo) && <HomeSectionv1 roomInfo={goodPriceInfo}></HomeSectionv1>}
        {isEmptyO(highScoreInfo) && <HomeSectionv1 roomInfo={highScoreInfo}></HomeSectionv1>}
      </div>
    </HomeWrapper>
  )
})

export default Home

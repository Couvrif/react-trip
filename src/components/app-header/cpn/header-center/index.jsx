import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { HeaderCenterWrapper } from './style'
import searchData from '@/assets/data/search_titles.json'
import SearchTab from './cpn/search-tab'
import SearchContent from './cpn/search-content'

const HeaderCenter = memo((props) => {
  const {isSearch,changeSearch} =props
  const [currentTab, setCurrentTab] = useState(0)
  const tabbarList = searchData.filter(i => i.title)

  const textContent = () => (
    <div className="search-bar" onClick={()=>changeSearch(true)}>
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
    </div>
  )

  const searchContent = () => (
    <div className='search-tab'>
      <SearchTab tabbarList={tabbarList} changeCurTab={setCurrentTab}></SearchTab>
      <div className='tab-bottom'>
        <SearchContent showData={searchData[currentTab].searchInfos  }></SearchContent>
      </div>
    </div>
  )

  return (
    <HeaderCenterWrapper>
      {
        isSearch ? searchContent() : textContent()
      }
      {/* <CSSTransition in={!isSearch} timeout={0} unmountOnExit classNames="bar">
        <div className="search-bar" onClick={()=>changeSearch(true)}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} timeout={0} unmountOnExit classNames="detail">
        <div className='search-tab'>
          <SearchTab tabbarList={tabbarList} changeCurTab={setCurrentTab}></SearchTab>
          <div className='tab-bottom'>
            <SearchContent showData={searchData[currentTab].searchInfos  }></SearchContent>
          </div>
        </div>
      </CSSTransition> */}
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter

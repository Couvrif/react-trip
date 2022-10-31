import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { HeaderCenterWrapper } from './style'
import searchData from '@/assets/data/search_titles.json'
import SearchTab from './cpn/search-tab'

const HeaderCenter = memo(() => {
  const [isSearch, setIsSearch] = useState(true)
  const tabbarList = searchData.filter(i => i.title)
  const searchTabRef = useRef()
  
  useEffect(() => {
    console.log('000',searchTabRef.current);
  })
  
  const textContent = () => {
    <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
  }

  const searchContent = () => (
    <SearchTab tabbarList={tabbarList} ref={searchTabRef}></SearchTab>
  )

  return (
    <HeaderCenterWrapper>
      {
        isSearch ? searchContent() : textContent()
      }
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter

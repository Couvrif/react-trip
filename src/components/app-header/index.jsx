import React, { memo, useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppHeaderWrapper, HeightWrapper } from './style'
import HeaderCenter from './cpn/header-center'
import HeaderLeft from './cpn/header-left'
import HeaderRight from './cpn/header-right'
import { useScroll } from '@/hooks/useScroll'
import { useLocation } from 'react-router-dom'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(true)

  const { scrollY } = useScroll()

  const curScroll = useRef(0)

  // 如果不是搜索状态，记录每次滚动的值
  if (!isSearch) curScroll.current = scrollY

  // 如果是搜索状态，判断滚动的值是否大于50
  if (isSearch && Math.abs(scrollY - curScroll.current) > 50) setIsSearch(false)

  // 判断是否是首页，显示透明
  const isOpacity = useRef(false)
  const loaction = useLocation()
  if (loaction.pathname === '/home' && scrollY === 0) {
    isOpacity.current = true
  } else {
    isOpacity.current = false
  }

  return (
    <ThemeProvider theme={{ isOpacity: isOpacity.current }}>
      <AppHeaderWrapper>
        <div className="del-cover">
          <div className="header-content">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter changeSearch={setIsSearch} isSearch={isOpacity.current || isSearch}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          {/* {isSearch ? <div className='other-content'></div> : ''} */}
          <HeightWrapper isSearch={isOpacity.current || isSearch}></HeightWrapper>
        </div>
        {isSearch ? <div className="cover" onClick={() => setIsSearch(false)}></div> : ''}
      </AppHeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader

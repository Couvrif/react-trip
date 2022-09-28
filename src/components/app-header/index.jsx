import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderCenter from './cpn/header-center'
import HeaderLeft from './cpn/header-left'
import HeaderRight from './cpn/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader

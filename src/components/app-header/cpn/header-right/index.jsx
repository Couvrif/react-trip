import React, { memo, useState, useEffect } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const panelList = ['注册', '登录', '出租房源', '开展体验', '帮助']
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => setShowPanel(false), true)
    return window.addEventListener('click', () => setShowPanel(false), true)
  }, [])

  const handleProfile = () => {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconGlobal></IconGlobal>
        </div>
      </div>
      <div className="profile" onClick={handleProfile}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        {showPanel && (
          <div className="panel">
            {panelList.map((item) => {
              return (
                <div className="panelItem" key={item}>
                  {item}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight

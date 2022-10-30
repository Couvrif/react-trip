import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

import { SwitchTransition, CSSTransition } from 'react-transition-group'

const PictureBrowser = memo((props) => {
  const { closeBtn, pictureList } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const changeIndex = (isRight) => {
    console.log(111)
    let newIndex = isRight === 'true' ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= pictureList.length) newIndex = 0
    if (newIndex <= 0) newIndex = pictureList.length - 1
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }

  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtn}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn" onClick={(e) => changeIndex('false')}>
            <IconArrowLeft width="70" height="70"></IconArrowLeft>
          </div>
          <div className="btn" onClick={(e) => changeIndex('true')}>
            <IconArrowRight width="70" height="70"></IconArrowRight>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureList[currentIndex]} className="pic" timeout={200}>
              <img src={pictureList[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview"></div>

      <CSSTransition in={isNext} classNames="box" timeout={1000} unmountOnExit={true}>
        <div className="helloBox">hello</div>
      </CSSTransition>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  closeBtn: PropTypes.func,
  pictureList: PropTypes.array
}

export default PictureBrowser

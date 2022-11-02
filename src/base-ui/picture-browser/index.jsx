import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import Indicator from '../indicator'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconDownTriangle from '@/assets/svg/icon-down-triangle'
import IconUptriangle from '@/assets/svg/icon-up-triangle'

import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { closeBtn, pictureList, picIndex } = props

  const [currentIndex, setCurrentIndex] = useState(picIndex ?? 0)
  const [isNext, setIsNext] = useState(false)
  const [showBottom, setShowBottom] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const changeIndex = (isRight) => {
    console.log(111, currentIndex)
    let newIndex = isRight === 'true' ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= pictureList.length) newIndex = 0
    else if (newIndex < 0) newIndex = pictureList.length - 1
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }

  const changeCurrent = (index) => {
    setCurrentIndex(index)
  }

  return (
    <PictureBrowserWrapper isNext={isNext} showBottom={showBottom}>
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
      <div className="preview">
        <div className="info">
          <div className="preview-desc">
            <div className="desc-left">
              {currentIndex + 1}/{pictureList.length}:room apartment图片{currentIndex + 1}
            </div>
            <div className="desc-right" onClick={(e) => setShowBottom(!showBottom)}>
              {showBottom ? '隐藏' : '显示'}照片列表
              {showBottom ? <IconDownTriangle></IconDownTriangle> : <IconUptriangle></IconUptriangle>}
            </div>
          </div>
          <div className="preview-list">
            <Indicator selectIndex={currentIndex}>
              {pictureList.map((item, index) => {
                return (
                  <div className={classNames('pre-item', { activeImg: currentIndex === index })} key={item}>
                    <img src={item} alt="" onClick={(e) => changeCurrent(index)} />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>

      {/* <CSSTransition in={isNext} classNames="box" timeout={1000} unmountOnExit={true}>
        <div className="helloBox">hello</div>
      </CSSTransition> */}
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  closeBtn: PropTypes.func,
  pictureList: PropTypes.array,
  picIndex: PropTypes.number
}

export default PictureBrowser

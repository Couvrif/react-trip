import PropTypes from 'prop-types'
import React, { memo, useRef, useEffect, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  const scrollContentRef = useRef()
  const totalDistanceRef = useRef()
  const [showRightBtn, setShowRightBtn] = useState(true)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    if (totalDistance > 0) {
      setShowRightBtn(true)
    }
  }, [props.children])

  //控制按钮的点击
  function controlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const offsetLeft = scrollContentRef.current.children[newIndex].offsetLeft
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`

    setPosIndex(newIndex)
    setShowLeftBtn(offsetLeft > 0)
    setShowRightBtn(totalDistanceRef.current >= offsetLeft)
    console.log('aaa', totalDistanceRef.current, offsetLeft)
  }

  return (
    <ScrollViewWrapper>
      {showLeftBtn && (
        <div className="control left" onClick={(e) => controlClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className="control right" onClick={(e) => controlClick(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView

import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props

  const contentRef = useRef()

  useEffect(() => {
    // 获取选中元素的宽度和距离左边的距离，指示器的宽度和可滚动宽度
    console.log('safdsafsafsafsafsaf', contentRef.current.children[selectIndex])
    const selectEl = contentRef.current.children[selectIndex]
    const itemLeft = selectEl.offsetLeft
    const itemWidth = selectEl.clientWidth
    const contentWidth = contentRef.current.clientWidth
    const scrollWidth = contentRef.current.scrollWidth

    // 可滚动距离=元素距离左边的距离+自身一半的宽度-指示器一半的宽度
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 边界判断：负数表示不够指示器一半的宽度，设置为零即可，大于指示器可滚动距离-可视距离表示已经超过
    if (distance < 0) distance = 0
    const totalDistance = scrollWidth - contentWidth

    if (distance > totalDistance) distance = totalDistance
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator

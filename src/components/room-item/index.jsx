import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  const [selectIndex, setSelectIndex] = useState(0)

  const sliderRef = useRef()

  function clickNext(isRight = false) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex > length - 1) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
    setSelectIndex(newIndex)
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="swiper">
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span className={classNames('dot', { active: selectIndex === index })}></span>
              </div>
            )
          })}
        </Indicator>
      </div>
      <div className="control">
        <div className="btn left" onClick={(e) => clickNext(false)}>
          <IconArrowLeft width="30" height="30"></IconArrowLeft>
        </div>
        <div className="btn right" onClick={(e) => clickNext(true)}>
          <IconArrowRight width="30" height="30"></IconArrowRight>
        </div>
      </div>

      {
        <Carousel dots={false} ref={sliderRef}>
          {itemData?.picture_urls?.map((item) => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })}
        </Carousel>
      }
    </div>
  )

  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'} itemWidth={itemWidth}>
      <div className="inner">
        {itemData.picture_urls ? sliderElement : pictureElement}
        <div className="desc">{itemData.verify_info.messages.join(' . ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly sx={{ fontSize: '13px', color: '#00848A', marginRight: '-1px' }} />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">.{itemData.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem

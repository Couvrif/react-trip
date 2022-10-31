import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailPictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
  const { detailInfo } = useSelector((state) => ({ detailInfo: state.detail.detailInfo }), shallowEqual)
  const [showPicture, setShowPicture] = useState(false)
  const [picIndex,setPicIndex]=useState(0)

  const closeBtn = useCallback(() => {
    setShowPicture(false)
  }, [showPicture])

  const changePicture = (index) => {
    setPicIndex(Number(index))
    setShowPicture(true)
  }

  return (
    <DetailPictureWrapper>
      <button onClick={(e) =>changePicture(0) }>显示图片</button>
      {showPicture && <PictureBrowser pictureList={detailInfo?.picture_urls} closeBtn={closeBtn} picIndex={picIndex}></PictureBrowser>}
      <div className="left" onClick={(e) => changePicture(e.currentTarget.children[0].id)}>
        <div className="item" id={0}>
          <img src={detailInfo?.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right" onClick={(e) => changePicture(e.target.id)}>
        {detailInfo?.picture_urls?.slice(1, 5).map((item,index) => {
          return (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover" id={index+1}></div>
            </div>
          )
        })}
      </div>
    </DetailPictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture

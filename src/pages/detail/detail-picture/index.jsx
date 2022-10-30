import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { DetailPictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo((props) => {
  const { detailInfo } = useSelector((state) => ({ detailInfo: state.detail.detailInfo }), shallowEqual)
  const [showPicture, setShowPicture] = useState(false)

  const closeBtn = useCallback(() => {
    setShowPicture(false)
  }, [showPicture])

  return (
    <DetailPictureWrapper>
      <button onClick={(e) => setShowPicture(true)}>显示图片</button>
      {showPicture && <PictureBrowser pictureList={detailInfo?.picture_urls} closeBtn={closeBtn}></PictureBrowser>}
      <div className="left">
        <div className="item">
          <img src={detailInfo?.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
          return (
            <div className="item" key={item}>
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          )
        })}
      </div>
    </DetailPictureWrapper>
  )
})

DetailPicture.propTypes = {}

export default DetailPicture

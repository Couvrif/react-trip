import React, { memo } from 'react'
import DetailInfo from './detail-info'
import DetailPicture from './detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
      <DetailInfo></DetailInfo>
    </DetailWrapper>
  )
})

export default Detail

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { footerName } = props
  let showName = '查看全部'
  if (footerName) {
    showName = `查看更多${footerName}房源`
  }

  const navigate = useNavigate()
  function goEntrie() {
    navigate('/entrie')
  }

  return (
    <FooterWrapper color={footerName ? '#00848A' : '#000'}>
      <div className="info" onClick={goEntrie}>
        <span className="text">{showName}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  footerName: PropTypes.string
}

export default SectionFooter

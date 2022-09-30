import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWrapper } from './style'

const SectionTabs = memo((props) => {

  const [currentIndex,setCurrentIndex]=useState(0)
  const { tabNameList = [], tabClick } = props

  function goClickTabNames(item,index) {
    setCurrentIndex(index)
    tabClick(item, index)
  }

  return (
    <TabWrapper>
      {tabNameList.map((item, index) => {
        return (
          <div className={classNames('tabItem',{active:index===currentIndex})} key={item} onClick={(e) => goClickTabNames(item,index)}>
            {item}
          </div>
        )
      })}
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNameList: PropTypes.array
}

export default SectionTabs

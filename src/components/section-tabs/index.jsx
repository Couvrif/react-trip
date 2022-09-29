import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { TabWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNameList = [], clickTabName } = props

  return (
    <TabWrapper>
      {/* {tabNameList.map((item, index) => {
        return (
          <div className="tabItem" key={item} onClick={(e) => clickTabName(item, index)}>
            {item}
          </div>
        )
      })} */}
      {tabNameList}
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNameList: PropTypes.array
}

export default SectionTabs

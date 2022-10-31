import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState,forwardRef } from 'react'
import { SearchTabWrapper } from './style'

const SearchTab = forwardRef((props) => {
    const {tabbarList,currentIndex}=props
    const [currentTab, setCurrentTab] = useState(0)

  return (
      <SearchTabWrapper>
          {
              tabbarList?.map((item, index) => {
                  return <div className={classNames('tabbar-item', { active: currentTab === index })}
                      key={index} onClick={()=>setCurrentTab(index)}>{item.title}</div>
              })
          }
    </SearchTabWrapper>
  )
})

SearchTab.propTypes = {
    tabbarList: PropTypes.array,
    changeCur: PropTypes.function,
    
}

export default SearchTab
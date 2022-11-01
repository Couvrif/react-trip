import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState,forwardRef } from 'react'
import { SearchTabWrapper } from './style'

const SearchTab = forwardRef((props) => {
    const [curIndex,setCurIndex]=useState(0)
    const { tabbarList, changeCurTab } = props
    
    const changeMyIndex = (index) => {
        setCurIndex(index)
        if(changeCurTab) changeCurTab(index)
    }

  return (
      <SearchTabWrapper>
          {
              tabbarList?.map((item, index) => {
                  return <div className={classNames('tabbar-item', { active: curIndex === index })}
                      key={index} onClick={()=>changeMyIndex(index)}>{item.title}</div>
              })
          }
    </SearchTabWrapper>
  )
})

SearchTab.propTypes = {
    tabbarList: PropTypes.array,
    currentTab: PropTypes.number,
    changeCurTab:PropTypes.func
}

export default SearchTab
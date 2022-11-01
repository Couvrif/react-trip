import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchContentWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'

const SearchContent = memo((props) => {
    const { showData } = props
    
    const searchIcon = () => {
        return (
            <div className='searchIcon-bgm'>
                <IconSearch></IconSearch>
            </div>
        )
    }
    
  return (
      <SearchContentWrapper>
          {
              showData.map((item,index) => {
                  return <div className='cnt-item' key={index}>
                      <div>
                          <div className='cnt-title'>{item.title}</div>
                          <div className='cnt-desc'>{item.desc}</div>
                      </div>
                        {
                          index===showData.length-1 ? searchIcon() : ''
                        }
                  </div>
              })
          }
    </SearchContentWrapper>
  )
})

SearchContent.propTypes = {
    showData:PropTypes.array
}

export default SearchContent
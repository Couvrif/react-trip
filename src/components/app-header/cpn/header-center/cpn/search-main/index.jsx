import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SearchContent from '../search-content'
import SearchTab from '../search-tab'
import { SearchMainWrapper } from './style'

const SearchMain = memo((props) => {
    const [currentTab, setCurrentTab] = useState(0)
  return (
      <SearchMainWrapper>
          <SearchTab></SearchTab>
          <SearchContent></SearchContent>
    </SearchMainWrapper>
  )
})

SearchMain.propTypes = {}

export default SearchMain
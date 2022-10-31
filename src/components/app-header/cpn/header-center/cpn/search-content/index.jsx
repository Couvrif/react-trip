import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchContentWrapper } from './style'

const SearchContent = memo((props) => {
  return (
    <SearchContentWrapper>SearchContent</SearchContentWrapper>
  )
})

SearchContent.propTypes = {}

export default SearchContent
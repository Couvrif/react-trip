// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])
  function clickItems(item) {
    const newItems = [...selectItems]
    if (selectItems.indexOf(item) !== -1) {
      const newIndex = selectItems.indexOf(item)
      newItems.splice(newIndex, 1)
    } else {
      newItems.push(item)
    }
    console.log(newItems)
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div className={classNames('item', { active: selectItems.includes(item) })} onClick={(e) => clickItems(item)} key={item}>
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter

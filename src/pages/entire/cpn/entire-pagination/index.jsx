// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'
import { changePageAction, fetchRoomListAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo((props) => {
  const { page, total, roomlist } = useSelector(
    (state) => ({
      page: state.entire.page,
      total: state.entire.total,
      roomlist: state.entire.roomlist
    }),
    shallowEqual
  )

  const totalPage = Math.ceil(total / 20)
  const startCount = page * 20 + 1
  const endCount = page + 1 * 20

  const dispatch = useDispatch()
  function handleChange(event, page) {
    window.scrollTo(0, 0)
    dispatch(changePageAction(page - 1))
    dispatch(fetchRoomListAction())
  }
  return (
    <PaginationWrapper>
      {!!roomlist.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="desc">
            <span>
              第{startCount}-{endCount}个房源 共计超过 {total}个住处
            </span>
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination

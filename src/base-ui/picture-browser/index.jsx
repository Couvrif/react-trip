import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureBrowser = memo((props) => {
    const { closeBtn, pictureList } = props
    
    const [currentIndex,setCurrentIndex]=useState(0)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow='auto'
        }
    }, [])
    
    const changeIndex = (isRight) => {
        console.log(111);
        let newIndex = isRight === 'true' ? currentIndex + 1 : currentIndex - 1
        if (newIndex >= pictureList.length) newIndex = 0
        if (newIndex <=0) newIndex = pictureList.length - 1
        setCurrentIndex(newIndex)
    }

    return (
        <PictureBrowserWrapper>
            <div className='top'>
                <div className='close-btn' onClick={closeBtn}>
                    <IconClose></IconClose>
                </div>
            </div>
            <div className='slider'>
                <div className='control'>
                    <div className='btn'  onClick={(e)=>changeIndex('false')}>
                        <IconArrowLeft width="70" height="70"></IconArrowLeft>
                    </div>
                    <div className='btn'  onClick={(e)=>changeIndex('true')}>
                        <IconArrowRight width="70" height="70"></IconArrowRight>
                    </div>
                </div>
                <div className='picture'>
                    <img src={pictureList[currentIndex]} alt="" />
                </div>    
            </div>
            <div className='preview'></div>
        </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
    closeBtn: PropTypes.func,
    pictureList:PropTypes.array
}

export default PictureBrowser
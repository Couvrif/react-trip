import React, { memo } from 'react'
import img1 from '@/assets/img/a.png'
import img2 from '@/assets/img/b.png'
import img3 from '@/assets/img/c.png'
import img4 from '@/assets/img/d.png'
import img5 from '@/assets/img/e.png'
import { Carousel } from 'antd'
import { TestWrapper } from './style'

const Test = memo(() => {
  const list = [img1, img2, img3, img4, img5]
  console.log(list);

  return (
    <TestWrapper>
      <div className="lll">123</div>
      {
        // <Carousel dots={false}>
        //   {list.map((item) => {
        //     return (
        //       <div className="cover" key={item}>
        //         <img src={item} alt="" />
        //       </div>
        //     )
        //   })}
        // </Carousel>
        <Carousel>
          <div>
            <h3 className="contentStyle">1</h3>
          </div>
          <div>
            <h3 className="contentStyle">2</h3>
          </div>
          <div>
            <h3 className="contentStyle">3</h3>
          </div>
          <div>
            <h3 className="contentStyle">4</h3>
          </div>
        </Carousel>
      }
      <div className="lll">123</div>
    </TestWrapper>
  )
})

export default Test

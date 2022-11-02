import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export const useScroll = () => {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const changeScroll = throttle(() => {
    setScrollX(window.scrollX)
    setScrollY(window.scrollY)
  }, 300)

  useEffect(() => {
    window.addEventListener('scroll', changeScroll)
    return () => {
      window.removeEventListener('scroll', changeScroll)
    }
  }, [changeScroll])

  return { scrollX, scrollY }
}

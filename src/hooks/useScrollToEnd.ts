import { useState, useEffect, DependencyList } from 'react'

const useScrollToEnd = (callbackFn: (isEnd: boolean) => void, deps?: DependencyList) => {
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 30
      const scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight
      const isBottom = scrollTop + clientHeight + threshold >= scrollHeight
      setIsEnd(isBottom)
      callbackFn(isBottom)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps || [])

  return isEnd
}

export default useScrollToEnd

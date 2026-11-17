import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './index.scss'

const InViewContext = createContext(true)

export const useInView = () => useContext(InViewContext)

const Section = ({ id, children }) => {
  const ref = useRef()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -25% 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`section${inView ? ' in-view' : ''}`}>
      <InViewContext.Provider value={inView}>{children}</InViewContext.Provider>
    </section>
  )
}

export default Section

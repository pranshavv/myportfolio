import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useInView } from '../Section'

import './index.scss'

const TITLE = 'Blogs & Projects'.split('')

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const inView = useInView()
  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [inView])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={TITLE} idx={15} />
        </h1>
        <div className="coming-soon">
          <span className="badge">Coming soon</span>
          <p>
            Write-ups on SRE, Kubernetes and the things that break in
            production, plus the projects behind them. Stay tuned.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio

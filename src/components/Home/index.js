import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useInView } from '../Section'

import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['  ', 'P', 'r', 'a', 'n', 's', 'h', 'a', 'v']
  // idx keeps the letter-by-letter delay running on from the previous word
  const jobWords = [
    { text: 'Site', idx: 22 },
    { text: 'Reliability', idx: 26 },
    { text: 'Engineer', idx: 37 },
  ]

  const inView = useInView()

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [inView])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img
              className='logoP'
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <span className="job-title">
              {jobWords.map(({ text, idx }) => (
                <span className="word" key={text}>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={text.split('')}
                    idx={idx}
                  />
                </span>
              ))}
            </span>
          </h1>
          <h2>Site Reliability Engineer @ PhonePe | AWS · Azure · Kubernetes · Terraform</h2>
          <p className="tagline">
            A guy who just loves music and observing things build &amp; crash around him
          </p>
          <a
            href="https://drive.google.com/file/d/1BYY2g_ABViTl3ZA9X2ZEvaK7lwG2kuDn/view?usp=drive_link"
            className="flat-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
          
          <a href="#contact" className="flat-button">
            CONTACT ME
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home

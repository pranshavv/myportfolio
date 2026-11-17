import { useEffect, useState } from 'react'
import {
  faAws,
  faDocker,
  faLinux,
  faGithub,
  faPython,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useInView } from '../Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a Site Reliability Engineer at PhonePe with 2 years of
            experience in cloud infrastructure, Kubernetes, and database
            reliability across AWS and Azure.
          </p>
          <p align="LEFT">
            I build infrastructure with Terraform, ship through GitOps with
            ArgoCD, and measure reliability with SLOs and Prometheus. I've
            handled P1 production incidents and run near-zero-downtime database
            migrations.
          </p>
          <p>
            I enjoy automating repetitive work with Python and Bash, and
            designing systems that are cost-aware, observable, and quick to
            recover.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#FCC624" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faMicrosoft} color="#0078D4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#3776AB" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import './Skill.scss'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const TextSphere = () => {
    useEffect(() => {
      const container = '.tagcloud'
      const texts = [
        'HTML5',
        'CSS3',
        'SASS',
        'JavaScript',
        'React',
        'MongoDB',
        'Next',
        'NodeJS',
        'C++',
        'ES6',
        'Cloud',
        'DSA',
        'Express',
        'GIT',
        'GITHUB',
      ]
      const options = {
        radius: 350,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        keep: true,
      }
      TagCloud(container, texts, options)
    }, [])

    return <div className="tagcloud" />
  }

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            As a final year student proficient in Java and intermediate-level
            web development skills, I bring a passion for software development
            and a natural aptitude for coding. I am always eager to take on new
            challenges and push my limits, which fuels my creativity and drive.
            My skills include proficiency in Java, HTML5, JavaScript, and CSS,
            as well as experience with frameworks like React.js. I am a team
            player, adaptable to different development environments and
            projects, and constantly strive for improvement.
          </p>
          <p align="LEFT">
            Additionally, I have knowledge of cloud computing, specifically
            Google Cloud Platform (GCP), making me well-rounded and capable of
            leveraging cloud technologies in web development projects. Overall,
            I believe that my skills, passion, and motivation make me a valuable
            asset to any development team, and I am confident in my ability to
            contribute to the success of a project.
          </p>
        </div>
      </div>
      <div className="sphere-cloud">
        <TextSphere />
      </div>

      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default Skill

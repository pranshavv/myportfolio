import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
            As a MERN stack web developer, I bring a wealth of technical
            expertise to the table. With a strong focus on front-end
            development, I have a keen eye for detail and a natural sense of
            creativity that allows me to deliver visually stunning and highly
            functional web applications. My skill set includes Java, JavaScript,
            Bootstrap, ReactJS, jQuery, Node.js, Sass, Express.js, Google Cloud
            Computing, and Cloud Computing. These skills allow me to approach
            any project with confidence and execute it with precision.
          </p>
          <p>
            In addition to my technical skills, I possess a range of soft skills
            that help me excel in a team environment. My problem-solving skills
            enable me to identify and overcome complex issues, while my
            leadership skills allow me to guide my team towards achieving our
            goals. My communication skills also ensure that I can articulate my
            ideas clearly and effectively, whether it's with my colleagues or
            clients.
          </p>
          <p>
            Overall, my unique combination of technical and soft skills has
            allowed me to deliver exceptional results on each project I have
            worked on. I am confident in my abilities, and I am always eager to
            take on new challenges to continue expanding my skill set.
          </p>
        </div>
      </div> 
    <Loader type='ball-scale-ripple-multiple'/>
    </>
  )
}

export default Skill

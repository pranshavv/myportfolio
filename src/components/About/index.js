import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
            Hello, I'm Pranshav, a final year student with a strong ambition for
            front-end development and a solid foundation in MERN stack
            development. I'm actively seeking a position in a well-established
            IT company where I can leverage my skills and work with cutting-edge
            technologies on a wide range of challenging projects.
          </p>
          <p align="LEFT">
            I approach my work with unwavering confidence, a natural curiosity,
            and a continuous drive to enhance my design capabilities with each
            problem I encounter.
          </p>
          <p>
            If I were to define myself in a single sentence, I'd say I'm a
            dedicated professional who thrives on solving design challenges and
            is always eager to stay up-to-date with the latest trends and
            technologies in the industry.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faAws} color="#FF9900" /> {/* AWS */}
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faDocker} color="#0db7ed" /> {/* Docker */}
            </div>
            <div className="face3">
            <FontAwesomeIcon icon={faLinux} color="#FCC624" /> {/* Linux Shell / OS */}
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faDatabase} color="#4DB33D" /> {/* Oracle / DB */}
            </div>
            <div className="face5">
            <FontAwesomeIcon icon={faGithub} color="#000000" /> {/* GitHub Actions */}
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faCloud} color="#00ACEE" /> {/* Cloud / Monitoring */}
            </div>

          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

// import { useEffect, useState } from 'react'
// // import {
// //   faAngular,
// //   faCss3,
// //   faGitAlt,
// //   faHtml5,
// //   faJsSquare,
// //   faReact,
// // } from '@fortawesome/free-brands-svg-icons'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import TagCloud from 'TagCloud'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './index.scss'

// const About = () => {
//   const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])

//   const TextSphere = () => {
//     useEffect(() => {
//       const container = ".tagcloud";
//       const texts = [
//         "HTML5",
//         "CSS3",
//         "SASS",
//         "JavaScript",
//         "React",
//         "MongoDB",
//         "Next",
//         "NodeJS",
//         "C++",
//         "",
//         "ES6",
//         "Cloud",
//         "DSA",
//         "Express",
//         "GIT",
//         "GITHUB",
//       ];
//       const options = {
//         radius: 300,
//         maxSpeed: "normal",
//         initSpeed: "normal",
//         keep: true,
//       };
//       TagCloud(container, texts, options);
//     }, []);

//     return <div className="tagcloud" />;
//   }

//   return (
//     <>
//       <div className="container about-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
//               idx={15}
//             />
//           </h1>
//           <p>
//             I'm a very ambitious front-end developer looking for a role in an
//             established IT company with the opportunity to work with the latest
//             technologies on challenging and diverse projects.
//           </p>
//           <p align="LEFT">
//             I'm quiet confident, naturally curious, and perpetually working on
//             improving my chops one design problem at a time.
//           </p>
//           <p>
//             If I need to define myself in one sentence that would be a family
//             person, father of a beautiful daughter, a sports fanatic,
//             photography enthusiast, and tech-obsessed!!!
//           </p>
//         </div>

//           <TextSphere />

//       </div>
//       <Loader type="pacman" />
//     </>
//   )
// }

// export default About

import { useEffect,useRef } from 'react'
import './index.scss'
import TiltCard from '../../Tiltcard/TiltCard'
import gsap from 'gsap';

const Logo = () => {
  const bgRef = useRef()
  const tiltCardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      tiltCardRef.current,
      {
        opacity: 0,
        // Add other initial styles or properties for the TiltCard component here
      },
      {
        opacity: 1,
        duration: 2, // Adjust the duration as needed
        delay: 2, // Adjust the delay as needed
        // Add other final styles or properties for the TiltCard component here
      }
    );
  }, []);
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

    // gsap
    //   .timeline()
    //   .to(bgRef.current, {
    //     duration: 1,
    //     opacity: 1,
    //   })
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 20,
    //   })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container" ref={bgRef}>
     <TiltCard/> 
    </div>
  )
}

export default Logo

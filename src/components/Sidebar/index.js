import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logopran.png'
import banner from '../../assets/images/blackP.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faTools,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ active }) => {
  const [showNav, setShowNav] = useState(false);
  const linkClass = (id, base = '') => `${base} ${active === id ? 'active' : ''}`.trim()

  return (
    <div className="nav-bar">
      <a className="logo" href="#home" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={banner} alt="Pranshav" />
      </a>
      <nav className={showNav ? 'mobile-show' : ''}>
        <a href="#home" className={linkClass('home')} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
        <a href="#about" className={linkClass('about', 'about-link')} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </a>
        <a href="#portfolio" className={linkClass('portfolio', 'portfolio-link')} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </a>
        <a href="#skill" className={linkClass('skill', 'skill-link')} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faTools} color="#4d4d4e" />
        </a>
        <a href="#contact" className={linkClass('contact', 'contact-link')} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/pranshav-vikram/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pranshavv"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/4cel17s8zttbnupom70e7unkg"
            target="_blank"
            rel="noreferrer"
            aria-label="Spotify"
          >
            <FontAwesomeIcon
              icon={faSpotify}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/praanshav/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar

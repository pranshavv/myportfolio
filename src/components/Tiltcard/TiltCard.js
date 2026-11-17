import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import photo from '../../assets/images/pransahvv1.jpg';
import './TiltCard.scss';

const SPOTIFY_URL = 'https://open.spotify.com/user/4cel17s8zttbnupom70e7unkg';

// import profile from '../../assets/images/TikTok (2).jpeg'
const TiltCard = () => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt-card');
    if (tiltElements.length > 0) {
      VanillaTilt.init(tiltElements, {
        reverse: true,
        max: 15,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: 1,
        speed: 300,
        glare: true,
        'max-glare': 0.5,
      });
    }

    return () => {
      tiltElements.forEach((element) => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="tilt-card rgb">
      <div className="card-image">
        <div className="card-photo" style={{ backgroundImage: `url(${photo})` }} />
        {/* <img className='cardimg' src={profile} alt="logo"/> */}
      </div>
      {/* <div className="card-text">
        <h2 className='naam'>Pranshav Vikram</h2>
        <p>
        I'm a final-year student who's proficient in Java, C++ and has intermediate-level web development skills,
        and who is passionate about software development and data structures and algorithms.
        </p>
      </div> */}
      <div className="card-stats">
        <div className="stat">
          <div className="value">SRE</div>
          <div className="type">@ PhonePe</div>
        </div>
        <div className="stat border">
          <div className="value">2</div>
          <div className="type">Yrs Experience</div>
        </div>
        <a
          className="stat spotify"
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Spotify profile"
        >
          <FontAwesomeIcon icon={faSpotify} className="spotify-icon" color="#1DB954" />
          <div className="type">Spotify</div>
        </a>
      </div>
    </div>
  );
};

export default TiltCard;

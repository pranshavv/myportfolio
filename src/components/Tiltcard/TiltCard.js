import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltCard.scss';
import profile from '../../assets/images/Firefly 20230910124325.png'
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
    <div className="tilt-card">
      <div className="card-image">
        <img className='cardimg' src={profile} alt="logo"/>
      </div>
      <div className="card-text">
        <h2 className='naam'>Pranshav Vikram</h2>
        <p>
        I'm a final-year student who's proficient in Java, C++ and has intermediate-level web development skills,
        and who is passionate about software development and data structures and algorithms.
        </p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            8.7
          </div>
          <div className="type">CGPA</div>
        </div>
        <div className="stat border">
          <div className="value"></div>
          <div className="type"></div>
        </div>
        <div className="stat">
          <div className="value">200+</div>
          <div className="type">DSA Problems</div>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;

import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltCard.scss';
import profile from '../../assets/images/pransahvv.jpg'
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
        <img src={profile} alt="logo"/>
      </div>
      <div className="card-text">
        <span className="date">1 week ago</span>
        <h2>Post Two</h2>
        <p>
          Hi mai hu pranshav vikram jo ki sexy hu
        </p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            7<sup>m</sup>
          </div>
          <div className="type">read</div>
        </div>
        <div className="stat border">
          <div className="value">7152</div>
          <div className="type">views</div>
        </div>
        <div className="stat">
          <div className="value">21</div>
          <div className="type">comments</div>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;

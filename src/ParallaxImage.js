import React from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({ imageUrl, strength }) => {
  const parallaxStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="parallax" style={parallaxStyle} data-strength={strength}>
      <div className="content">
        <h1>Сайт находится в разработке</h1>
        <p>Мы работаем над улучшениями. Приносим извинения за временные неудобства.</p>
      </div>
    </div>
  );
};

export default ParallaxImage;

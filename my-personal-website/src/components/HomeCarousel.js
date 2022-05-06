import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './HomeCarousel.css';
import jsLogo from '../public/image/javascript-logo.svg'
import cssLogo from '../public/image/css3-logo.svg'
import htmlLogo from '../public/image/html5-logo.svg'
import reactLogo from '../public/image/react-logo.svg'
import postgresqlLogo from '../public/image/postgresql-logo.svg'
import expressLogo from '../public/image/express-logo.svg'
import nodejsLogo from '../public/image/nodejs-logo.svg'


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={htmlLogo} onDragStart={handleDragStart} alt="hmt5-logo" className="tech-logo" />,
  <img src={cssLogo} onDragStart={handleDragStart} alt="css3-logo" className="tech-logo" />,
  <img src={jsLogo} onDragStart={handleDragStart} alt="javascript-logo" className="tech-logo" />,
  <img src={reactLogo} onDragStart={handleDragStart} alt="react-logo" className="tech-logo" />,
  <img src={postgresqlLogo} onDragStart={handleDragStart} alt="postgresql-logo" className="tech-logo" />,
  <img src={expressLogo} onDragStart={handleDragStart} alt="express-logo"className="tech-logo"  />,
  <img src={nodejsLogo} onDragStart={handleDragStart} alt="nodejs-logo"className="tech-logo"  />
];

const Gallery = () => {
  

  return (
    <div className='carousel-container'>
      <AliceCarousel 
        mouseTracking 
        items={items} 
        autoPlay
        autoWidth
        infinite
        animationDuration={800}
        animationType={'slide'}
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
}

export default Gallery;
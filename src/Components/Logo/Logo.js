import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain2.png';

const Logo = () => {
  return (
    <div className="ma3 mt0 pb1">
      <Tilt className="Tilt b2 shadow-2" options={{ max : 35 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa5"> <img className=""style={{paddingtop:'5px'}} src={brain} alt="brain" /></div>
      </Tilt>
    </div>
  )
}

export default Logo;

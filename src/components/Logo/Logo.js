import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Face from './face.svg';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt'
        options={{ max: 65 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner pa3'>
          {' '}
          <img style={{ paddingTop: '4px' }} src={Face} alt='logo' />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

import React from 'react';
import './Slider.css';

import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../src/assets/VanCleef-Banner.svg';
import slider2 from '../../../src/assets/menu_GrandDiamond_Banner.svg';


const Slider = () => {
  


  return (
    <Carousel>
      <Carousel.Item className='Carousel Item'>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item  className='Item'>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

     
      </Carousel.Item>
   

    </Carousel>
  );
}

export default Slider;
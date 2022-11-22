import React from 'react';
import './Options.css';
import { Container, Row,Col  } from 'react-bootstrap';

import couch from '../../../src/assets/couch.svg';
import face from '../../../src/assets/face.svg';
import home from '../../../src/assets/home.svg';
import tshirt from '../../../src/assets/tshirt.svg';
import shoes from '../../../src/assets/shoes.svg';

const Options = () => {
  return (
    <Container className='Options'>
    <Row>
      <Col  className="option"> <img src={tshirt} className='img-fluid' /> <p>Apparel</p></Col >
      <Col   className="option" ><img src={shoes} className='img-fluid ' /><p>Shoes</p></Col >
      <Col     className="option face"><img src={face} className='img-fluid' /><p>Beauty Active  button</p></Col >
      <Col    className="option"><img src={home} className='img-fluid' /><p>Home</p></Col >
      <Col    className="option"><img src={couch} className='img-fluid' /><p>Furniture</p></Col >

    </Row>
  
  </Container>
  );
}

export default Options;
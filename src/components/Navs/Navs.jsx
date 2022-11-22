import React from 'react';
import './Navs.css';
import { Container, Row, Col } from 'react-bootstrap';
import menu from '../../../src/assets/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../src/assets/logo.svg';
import search from '../../../src/assets/search.svg';
import shoppingcart from '../../../src/assets/shopping-cart.svg';


const Navs = ({ menuOpen, setMenuOpen }) => {
  return (

    <div className={"topbar " + (menuOpen && "active")}>
      <Container >
        <Row>
          <Col md={2} xs={3} className="pt-4 ps-5 menuimg" onClick={() => setMenuOpen(!menuOpen)}> <img src={menu} className='img-fluid ' /></Col>


          <Col md={6} xs={3} className="pt-1 logo"><img src={logo} className='img-fluid ' /></Col>
          <Col md={2} xs={3} className="pt-4 ps-5"> <form action="" className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required />
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
          </form></Col>
          <Col md={2} xs={3} className="pt-4 ps-5 shoppingcart" ><img src={shoppingcart} className='img-fluid' /></Col>
        </Row>







      </Container>
    </div>
  );
}

export default Navs;
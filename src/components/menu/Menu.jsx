import React from 'react';
import './Menu.css';
import boy from '../../../src/assets/boy.png';
import imgbar1 from '../../../src/assets/imgbar1.svg';
import imgbar2 from '../../../src/assets/imgbar2.svg';
import imgbar3 from '../../../src/assets/imgbar3.svg';
import logout from '../../../src/assets/logout.svg';

import { Container, Row, Col  } from 'react-bootstrap';





const Menu = ({ menuOpen, setMenuOpen }) => {
  return (


    <div className={"menu " + (menuOpen && "active")}>


      <div className='info'>
        <img src={boy} className='img-fluid ' />
        <p>Mohammad alabdullah</p>
        <a href="mailto: capivokw@gmail.com">capivokw@gmail.com</a>

      </div>

      <div className='line'></div>


      <ul className='links' >
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">My Orders</a>
          <img src={imgbar1} className='img-fluid ' />

        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">My Addresses</a>
          <img src={imgbar2} className='img-fluid ' />

        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Privacy and Policy</a>
          <img src={imgbar3} className='img-fluid ' />

        </li>



      </ul>




      <Row className='checkbox'>
      <Col><p className='textcheckbox' >English</p></Col>
      <Col>
     <div className="form-check form-switch form-switch-sm">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  defaultChecked/>
</div>
</Col>
<Col><p className="textcheckbox" >العربية</p></Col>
    </Row>



    <button className="btn"><img src={logout} className='img-fluid ' /> Logout</button>


    </div>






  );
}

export default Menu;
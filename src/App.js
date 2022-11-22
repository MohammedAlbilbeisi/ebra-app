import './App.css';
import React, { Fragment } from 'react';
import Navs from './components/Navs/Navs';
import Slider from './components/Slider/Slider';
import Options from './components/Options/Options';
import Products from './components/Products/Product';
import { useState } from "react";

import Menu from './components/menu/Menu';




function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <Fragment >
    <Navs  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Slider />
    <Options />
    <Products />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

  </Fragment>
  );
}

export default App;

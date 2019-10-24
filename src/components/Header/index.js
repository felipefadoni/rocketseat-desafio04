import React, { Component } from 'react';

import facebook from '../../assets/image/facebook.svg';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <img src={facebook} />
        <div id="meu-perfil">
          <span>Meu perfil</span>
          <ion-icon name="contact"></ion-icon>
        </div>
      </header>
    );
  }
}

export default Header;
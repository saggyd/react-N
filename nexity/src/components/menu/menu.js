import React, { Component } from 'react';

import hamburger from '../../assets/images/hamburger.png';
import logo from '../../assets/images/logo.png';
import './menu.css';

class Menu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLeftPanelOpen: false
        };
    }

    handleClick = () => {
        this.setState({isLeftPanelOpen:!this.state.isLeftPanelOpen});
    }

  render() {
    const panelShow = {
        height: window.innerHeight - 102,
        display: this.state.isLeftPanelOpen ? "block" : "none"
    };
    const bgHeight = {
        height: window.innerHeight,
        display: this.state.isLeftPanelOpen ? "block" : "none"
    }
    return (
        <div className="menu">
            <button onClick={()=>this.handleClick()}><img src={hamburger} alt="" /></button>
            <div className="collapsablePanel" style={ panelShow }>
                <img src={logo} alt="" />
                <ul className="menuItem">
                    <li>ACCUEIL</li>
                    <li>MANDAT DE LOCATION</li>
                    <li>FICHE DE LOCATION</li>
                    <li>PROPOSITION DE BAIL</li>
                    <li>BAIL DE LOCATION</li>
                    <li className="active">CLIENTS</li>
                    <li>ADMINISTRATION</li>
                </ul>
            </div>
            <div className="background" style={ bgHeight } onClick={()=>this.handleClick()}></div>
        </div>
    );
  }
}
export default Menu;
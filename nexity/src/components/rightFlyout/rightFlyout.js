import React, { Component } from 'react';

import dot from '../../assets/images/dot.png';
import './rightFlyout.css';


class Flyout extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isRightPanelOpen: false
        };
    }

    handleClick = () => {
        this.setState({isRightPanelOpen:!this.state.isRightPanelOpen});
    }

  render() {
    const panelShow = {
        display: this.state.isRightPanelOpen ? "block" : "none"
    };
    const bgHeight = {
        height: window.innerHeight,
        display: this.state.isRightPanelOpen ? "block" : "none"
    }
    return (
        <div className="flyout">
            <button onClick={()=>this.handleClick()}><img src={dot} alt="" /></button>
            <div className="collapsablePanel" style={ panelShow }>
                <ul className="menuItem">
                    <li><a href="#headline1" onClick={()=>this.handleClick()}>site</a><img src={dot} alt="" /></li>
                    <li><a href="#headline2" onClick={()=>this.handleClick()}>contacts</a><img src={dot} alt="" /></li>
                    <li><a href="#headline3" onClick={()=>this.handleClick()}>qualification</a><img src={dot} alt="" /></li>
                    <li><a href="#headline4" onClick={()=>this.handleClick()}>BIENS RECHERCHES</a><img src={dot} alt="" /></li>
                    <li><a href="#headline5" onClick={()=>this.handleClick()}>notes</a><img src={dot} alt="" /></li>
                </ul>
            </div>
            <div className="background" style={ bgHeight } onClick={()=>this.handleClick()}></div>
        </div>
    );
  }
}
export default Flyout;
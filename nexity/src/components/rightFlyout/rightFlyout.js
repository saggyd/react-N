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
                    <li>site<img src={dot} alt="" /></li>
                    <li>contacts<img src={dot} alt="" /></li>
                    <li>qualification<img src={dot} alt="" /></li>
                    <li>BIENS RECHERCHES<img src={dot} alt="" /></li>
                    <li>notes<img src={dot} alt="" /></li>
                </ul>
            </div>
            <div className="background" style={ bgHeight } onClick={()=>this.handleClick()}></div>
        </div>
    );
  }
}
export default Flyout;
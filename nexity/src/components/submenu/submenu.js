import React from 'react';

import './submenu.css';

import signout from '../../assets/images/signout.png';
import save from '../../assets/images/save.png';
import email from '../../assets/images/email.png';

import {Tooltip, OverlayTrigger, Navbar, NavItem, Nav} from 'react-bootstrap';

const Submenu = (props) => {
    const tooltip = (
      <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong> Check this info.
      </Tooltip>
    );

    return (
        <div className="submenu">
          <Navbar inverse collapseOnSelect fluid>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <i className="fas fa-calendar-alt"></i>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={4} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={email} alt="" width="28" height="28"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={5} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={6} href="#">
                <OverlayTrigger placement="bottom" overlay={tooltip}>
                  <img src={signout} alt="" width="20" height="20"/>
                </OverlayTrigger>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
    );
}

export default Submenu;
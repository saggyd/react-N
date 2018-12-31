import React, { Component } from 'react';
import './header.css';

import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand"><i className="fas fa-arrow-left"></i></a>
            </Navbar.Brand>
            <span className="header-text">
              <p className="navbar-text big-text">
                Fiche Prospect Locataire CA0993037
              </p>
              <Navbar.Text>
                Créé le 12/01/2018 par Bruce Lee, Modifié le 16/12/2018 par Bruce Lee
              </Navbar.Text>
            </span>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <i className="fas fa-search"></i>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <i className="far fa-bell"></i>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <i className="fas fa-user"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;

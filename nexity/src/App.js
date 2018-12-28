import React, { Component } from 'react';
import signout from './assets/images/signout.png';
import save from './assets/images/save.png';
import email from './assets/images/email.png';
import './App.css';


import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap'; 
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Tooltip, OverlayTrigger,Button} from 'react-bootstrap';

class App extends Component {
  tooltip = (
      <Tooltip id="tooltip">
        <strong>Holy guacamole!</strong> Check this info.
      </Tooltip>
    );

  render() {
    return (
      <div className="wrapper">

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

        <div className="submenu">
          <Navbar inverse collapseOnSelect fluid>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <i className="fas fa-calendar-alt"></i>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={4} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <img src={email} alt="" width="28" height="28"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={5} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <img src={save} alt="" width="18" height="18"/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={6} href="#">
                <OverlayTrigger placement="bottom" overlay={this.tooltip}>
                  <img src={signout} alt="" width="20" height="20"/>
                </OverlayTrigger>
              </NavItem>
            </Nav>
          </Navbar>
        </div>

        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <code>{'<Col xs={12} md={8} />'};</code>
            </Col>
            <Col xs={6} md={4}>
              <code>{'<Col xs={6} md={4} />'}</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

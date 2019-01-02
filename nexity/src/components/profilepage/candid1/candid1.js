import React, { Component } from 'react';

import PageBanner from '../../pageBanner/pageBanner';
import FieldGroup from '../../formGroup/formGroup';
import downArrow from '../../../assets/images/downArrow.png';
import upArrow from '../../../assets/images/upArrow.png';

import {Col, code, Button, Panel, Row, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class Candid1 extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            site: {
                open: true
            },
            contacts: {
                open: true
            }
        };
        console.log(this.state.site.open);
    }

  render() {
    return (
        <div className="candid1">
            <PageBanner />
            <div className="accordion">
                <Button onClick={() => this.setState({ site:{open: !this.state.site.open }})}>
                    { this.state.site.open ? <img src={downArrow} alt=""/> : <img src={upArrow} alt=""/> }SITE
                </Button>
                <br />
                <Panel id="collapsible-panel-example-1" expanded={this.state.site.open} onToggle>
                <Panel.Collapse>
                    <Button className="action-button">SITE</Button>
                    <Panel.Body>
                        <Row className="show-grid">
                            <Col xs={12} md={3}>
                                <FormGroup controlId="siteSelect">
                                <ControlLabel>SITE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="bureauSelect">
                                <ControlLabel>BUREAU</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="negociatorSelect">
                                <ControlLabel>NÉGOCIATEUR</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="assistanceSelect">
                                <ControlLabel>ASSISTANCE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel.Collapse>
                </Panel>
            </div>
            <div className="accordion">
                <Button onClick={() => this.setState({ contacts:{open: !this.state.contacts.open }})}>
                    { this.state.contacts.open ? <img src={downArrow} alt=""/> : <img src={upArrow} alt=""/> }Contacts
                </Button>
                <br />
                <Panel id="collapsible-panel-example-1" expanded={this.state.contacts.open} onToggle>
                <Panel.Collapse>
                    <Button className="action-button">SITE</Button>
                    <Panel.Body>
                        <Row className="show-grid">
                            <Col xs={12} md={3}>
                                <FormGroup controlId="siteSelect">
                                <ControlLabel>SITE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="bureauSelect">
                                <ControlLabel>BUREAU</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="negociatorSelect">
                                <ControlLabel>NÉGOCIATEUR</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={3}>
                                <FormGroup controlId="siteSelect">
                                <ControlLabel>SITE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="bureauSelect">
                                <ControlLabel>BUREAU</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="negociatorSelect">
                                <ControlLabel>NÉGOCIATEUR</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="assistanceSelect">
                                <ControlLabel>ASSISTANCE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={3}>
                                <FormGroup controlId="siteSelect">
                                <ControlLabel>SITE</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="bureauSelect">
                                <ControlLabel>BUREAU</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormGroup controlId="negociatorSelect">
                                <ControlLabel>NÉGOCIATEUR</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">select</option>
                                    <option value="other">277 – Actineuf Lyon</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel.Collapse>
                </Panel>
            </div>
        </div>
    );
  }
}

export default Candid1;
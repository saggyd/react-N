import React from 'react';
import './pageBanner.css';
import profile_2 from '../../assets/images/profile_2.png';
import home from '../../assets/images/home.png';

import {Col, Row} from 'react-bootstrap';

const PageBanner = (props) => {  
    return (
        <div className="page-banner">
            <Col xs={12}>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <i className="fas fa-user"></i>
                        <h3>VANDAMME Jean-Claude</h3>
                    </Col>
                    <Col xs={12} md={6}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                </Row>
                <hr />
                <Row className="show-grid">
                    <Col xs={12} md={6} mdOffset={6}>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                                <img src={profile_2} width="40" height="40" alt=""/>
                                <span className="p-label">RELANCER LE CANDIDAT</span>
                            </Col>
                            <Col xs={12} md={6}>
                                <img src={home} width="30" height="30"  alt=""/>
                                <span className="p-label">RAPPROCHEMENTDE BIENS</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );
}

export default PageBanner;

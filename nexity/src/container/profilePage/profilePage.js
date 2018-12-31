import React, { Component } from 'react';

import './profilePage.css';
import InnerMenu from '../../components/innerMenu/innerMenu';
import PageBanner from '../../components/pageBanner/pageBanner';

import {Col, code} from 'react-bootstrap';

class ProfilePage extends Component {

  render() {
    return (
        <div>
            <Col xs={12}>
                <InnerMenu />
                <PageBanner />
                <code>{'<Col xs={12} md={8} />'};</code>
            </Col>
        </div>
    );
  }
}

export default ProfilePage;
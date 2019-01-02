import React, { Component } from 'react';

import './profilePage.css';
import InnerMenu from '../../components/innerMenu/innerMenu';
import PageBanner from '../../components/pageBanner/pageBanner';
import Candid1 from '../../components/profilepage/candid1/candid1';

import {Col} from 'react-bootstrap';

class ProfilePage extends Component {

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
    }

  render() {
    return (
        <div>
            <Col xs={12}>
                <InnerMenu />
                <Candid1 />
            </Col>
        </div>
    );
  }
}

export default ProfilePage;
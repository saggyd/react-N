import React, { Component } from 'react';

import './profilePage.css';
import InnerMenu from '../../components/innerMenu/innerMenu';
import Candid1 from '../../components/profilepage/candid1/candid1';
import Candid2 from '../../components/profilepage/candid2/candid2';

import {Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";

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

    totalComponent = ['/Candid1', '/Candid2'];

  render() {
    return (
        <div>
            <Col xs={12}>
                <Router>
                    <div>
                        <InnerMenu routerArr={this.totalComponent}/>
                        <Route exact path="/Candid1" component={Candid1} />
                        <Route exact path="/Candid2" component={Candid2} />
                    </div>
                </Router>
            </Col>
        </div>
    );
  }
}

export default ProfilePage;
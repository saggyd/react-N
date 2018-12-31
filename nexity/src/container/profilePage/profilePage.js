import React, { Component } from 'react';

import './profilePage.css';
import InnerMenu from '../../components/innerMenu/innerMenu';
import PageBanner from '../../components/pageBanner/pageBanner';
import downArrow from '../../assets/images/downArrow.png';
import upArrow from '../../assets/images/upArrow.png';

import {Col, code, Button, Panel} from 'react-bootstrap';

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
        console.log(this.state.site.open);
    }

  render() {
    return (
        <div>
            <Col xs={12}>
                <InnerMenu />
                <PageBanner />
                <div className="accordion">
                    <Button onClick={() => this.setState({ site:{open: !this.state.site.open }})}>
                        { this.state.site.open ? <img src={downArrow} alt=""/> : <img src={upArrow} alt=""/> }SITE
                    </Button>
                    <br />
                    <Panel id="collapsible-panel-example-1" expanded={this.state.site.open}>
                    <Panel.Collapse>
                        <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                    </Panel>
                </div>
                <div className="accordion">
                    <Button onClick={() => this.setState({ contacts:{open: !this.state.contacts.open }})}>
                        { this.state.contacts.open ? <img src={downArrow} alt=""/> : <img src={upArrow} alt=""/> }Contacts
                    </Button>
                    <br />
                    <Panel id="collapsible-panel-example-1" expanded={this.state.contacts.open}>
                    <Panel.Collapse>
                        <Panel.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                        ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                    </Panel>
                </div>
            </Col>
        </div>
    );
  }
}

export default ProfilePage;
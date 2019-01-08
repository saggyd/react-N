import React,{Component} from 'react';
import './innerMenu.css';

import {NavItem, Nav} from 'react-bootstrap';

class InnerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activatedKey: 1
        }
    }
    handleSelect = (selectedKey) => {
        this.setState({activatedKey: selectedKey})
    }

    render() {
        return (
            <div className="inner-menu">
                <Nav bsStyle="pills" activeKey={this.state.activatedKey} onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href={this.props.routerArr[0]}>
                        NavItem 1 content
                    </NavItem>
                    <NavItem eventKey={2} href={this.props.routerArr[1]}>
                        NavItem 2 content
                    </NavItem>
                    <NavItem eventKey={3} href={this.props.routerArr[2]}>
                        NavItem 3 content
                    </NavItem>
                    <NavItem eventKey={4} href={this.props.routerArr[3]}>
                        NavItem 4 content
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default InnerMenu;

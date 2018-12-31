import React from 'react';
import './innerMenu.css';

import {NavItem, Nav} from 'react-bootstrap';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const InnerMenu = (props) => {  
    return (
        <div className="inner-menu">
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/home">
                NavItem 1 content
            </NavItem>
            <NavItem eventKey={2} title="Item">
                NavItem 2 content
            </NavItem>
            <NavItem eventKey={3} href="/home">
                NavItem 3 content
            </NavItem>
            <NavItem eventKey={4} href="/home">
                NavItem 4 content
            </NavItem>
        </Nav>
        </div>
    );
}

export default InnerMenu;

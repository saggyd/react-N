import React, { Component } from 'react';

import './App.css';

import Header from './components/header/header';
import Submenu from './components/submenu/submenu';
import Menu from './components/menu/menu';
import Flyout from './components/rightFlyout/rightFlyout';
import OuterWrapper from './container/outerWrapper/outerWrapper';
import InnerWrapper from './container/innerWrapper/innerWrapper';
import ProfilePage from './container/profilePage/profilePage';

class App extends Component {

  render() {
    return (
      <OuterWrapper>
        <Header />        
        <Submenu />
        <InnerWrapper>
          <ProfilePage />
        </InnerWrapper>
        <Menu />
        <Flyout />
      </OuterWrapper>
         
    );
  }
}

export default App;

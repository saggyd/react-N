import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

import Header from './components/header/header';
import Submenu from './components/submenu/submenu';
import Menu from './components/menu/menu';
import Flyout from './components/rightFlyout/rightFlyout';
import OuterWrapper from './container/outerWrapper/outerWrapper';
import InnerWrapper from './container/innerWrapper/innerWrapper';
import ProfilePage from './container/profilePage/profilePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<OuterWrapper>
              <Header />        
              <Submenu />
              <InnerWrapper>
                <ProfilePage />
              </InnerWrapper>
              <Menu />
              <Flyout />
            </OuterWrapper>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

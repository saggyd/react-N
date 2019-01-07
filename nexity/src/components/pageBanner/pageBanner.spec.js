import React from 'react';
import ReactDOM from 'react-dom';
import PageBanner from './pageBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageBanner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
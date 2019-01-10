import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new EnzymeAdapter()});

const setUp = (props={},state=null) => {
  return shallow(<App {...props} />);
}

describe('<App />', () => {
  it('renders OuterWrapper',() => {
    const wrapper = setUp();
    expect(wrapper.find('OuterWrapper').length).toBe(1);
  });

  it('renders Header',() => {
    const wrapper = setUp();
    expect(wrapper.find('Header').length).toBe(1);
  });

  it('renders Submenu',() => {
    const wrapper = setUp();
    expect(wrapper.find('Submenu').length).toBe(1);
  });

  it('renders InnerWrapper',() => {
    const wrapper = setUp();
    expect(wrapper.find('InnerWrapper').length).toBe(1);
  });

  it('renders Menu',() => {
    const wrapper = setUp();
    expect(wrapper.find('Menu').length).toBe(1);
  });

  it('renders Flyout',() => {
    const wrapper = setUp();
    expect(wrapper.find('Flyout').length).toBe(1);
  });

});


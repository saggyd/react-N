import React from 'react';
import App from './submenu';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setUp = (props={},state=null) => {
    return shallow(<App {...props} />);
}

const submenuSetup = (props={},state=null) => {
    return shallow(<App {...props} />);
  }
  
describe('<Submenu />', () => {
    it('renders submenu wrapper',() => {
        const wrapper = submenuSetup();
        expect(wrapper.find('.submenu').length).toBe(1);
    });

    it('renders Navbar',() => {
        const wrapper = submenuSetup();
        expect(wrapper.find('Navbar').length).toBe(0);
    });

    it('renders Nav',() => {
        const wrapper = submenuSetup();
        expect(wrapper.find('Nav').length).toBe(1);
    });

    it('renders NavItem',() => {
        const wrapper = submenuSetup();
        expect(wrapper.find('NavItem').length).toBe(6);
    });

    it('renders OverlayTrigger',() => {
        const wrapper = submenuSetup();
        expect(wrapper.find('OverlayTrigger').length).toBe(6);
    });

    /*it('renders Menu',() => {
        const wrapper = setUp();
        expect(wrapper.find('Menu').length).toBe(1);
    });

    it('renders Flyout',() => {
        const wrapper = setUp();
        expect(wrapper.find('Flyout').length).toBe(1);
    });*/

});

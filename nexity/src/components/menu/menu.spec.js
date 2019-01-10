import React from 'react';
import Menu from './menu';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

const menuSetup = (props={},state=null) => {
    const wrapper = shallow(<Menu {...props} />);
    if(state) {
        wrapper.setState(state);
    }
    return wrapper;
}

test("menu rendered correctly", () => {
    const wrapper = menuSetup();
    expect(wrapper.find('.menuItem').find('li').length).toBe(7);
});

test("Hamberger button clicked", () => {
    const isLeftPanelOpen = false;
    const wrapper = menuSetup(null,{isLeftPanelOpen});
    const button = wrapper.find('button');
    button.simulate('click');
    wrapper.update();
    expect(wrapper.state('isLeftPanelOpen')).toBe(true);
});

test("Menu closed on clicked outside", () => {
    const isLeftPanelOpen = true;
    const wrapper = menuSetup(null,{isLeftPanelOpen});
    const background = wrapper.find('.background');
    background.simulate('click');
    wrapper.update();
    expect(wrapper.state('isLeftPanelOpen')).toBe(false);
});





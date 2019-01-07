import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    window.alert = jest.fn();
    const menu = shallow(<Menu />);

    menu.find('button').simulate('click');
    //woutput.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked');
  });
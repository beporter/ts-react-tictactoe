import { shallow } from 'enzyme';
import React from 'react';
import { Square } from '../src/Square';

describe('<Square />', () => {
  test('outputs the provided value', () => {
    const mark = '🐶';
    const wrapper = shallow(<Square value={mark} clickHandler={() => undefined}/>);

    expect(wrapper.find('div').hasClass('square')).toBe(true);
    expect(wrapper.text()).toBe(mark);
  });

  test('makes click handlers callable', () => {
    const spy = jest.fn((args) => args);
    const mark = '🐱';
    const wrapper = shallow(<Square value={mark} clickHandler={spy}/>);
    const button = wrapper.find('button').first();
    button.simulate('click');

    const handler = button.prop('onClick');
    expect(handler).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });
});

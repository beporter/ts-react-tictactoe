import { shallow } from 'enzyme';
import React from 'react';
import { Game } from '../src/Game';

describe('<Game />', () => {
  test('does something', () => {
    const wrapper = shallow(<Game />);

    // expect(wrapper.find('button').hasClass('square')).toBe(true);
    // expect(wrapper.text()).toBe(mark);
  });
});

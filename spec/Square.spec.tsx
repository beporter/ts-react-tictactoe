import { shallow } from 'enzyme';
import React from 'react';
import { Square } from '../src/Square';

describe('<Square />', () => {
  test('outputs the provided value', () => {
    const mark = '🐶';
    const wrapper = shallow(<Square value={mark} />);

    expect(wrapper.find('button').hasClass('square')).toBe(true);
    expect(wrapper.text()).toBe(mark);
  });
});

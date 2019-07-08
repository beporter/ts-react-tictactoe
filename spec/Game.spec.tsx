import { shallow } from 'enzyme';
import React from 'react';
import { Game } from '../src/Game';

describe('<Game />', () => {
  test('contains a <Board />', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper.find('Board')).toHaveLength(1);
  });

  test('says who is next', () => {
    const wrapper = shallow(<Game />);

    expect(wrapper.text()).toContain ('Next to play: X');
  });
});

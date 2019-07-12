import { shallow } from 'enzyme';
import React from 'react';
import { Game } from '../src/Game';

describe('<Game />', () => {
  test('contains a <Board />', () => {
    jest.spyOn(React, 'useContext').mockReturnValue({xToPlay: true, board: []});
    const wrapper = shallow(<Game />);

    expect(wrapper.find('Board')).toHaveLength(1);
  });

  test('says who is next', () => {
    jest.spyOn(React, 'useContext').mockReturnValue({xToPlay: true, board: []});
    const wrapper = shallow(<Game />);

    expect(wrapper.text()).toContain('Next to play: X');
  });
});

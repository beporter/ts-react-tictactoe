import { shallow } from 'enzyme';
import React from 'react';
import { Game } from '../src/Game';
import * as GameContext from '../src/GameContext';

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

  test('passes a click handler to the <Board />', () => {
    const spy = jest.fn((args) => args);
    jest.spyOn(React, 'useContext').mockImplementation(() => spy);
    const wrapper = shallow(<Game />);

    const handler: Function = wrapper.find('Board').prop('clickHandler');
    expect(handler).toBeDefined();
    handler(1);
    expect(spy).toHaveBeenCalledWith({type: 'move', position: 1});
  });
});

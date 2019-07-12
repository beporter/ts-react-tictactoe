import { mount, shallow } from 'enzyme';
import React from 'react';
import { Board } from '../src/Board';
import * as GameContext from '../src/GameContext';

describe('<Board />', () => {
  test('has nine squares', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValueOnce({xToPlay: true, board: ['O', '', '',
        '', '', '',
        '', '', ''
      ]})
      .mockReturnValueOnce(jest.fn());

    const squares = Array(9).fill(''); // Contents don't matter cause `shallow()`.
    const wrapper = shallow(<Board squares={squares} />);

    expect(wrapper.find('Square')).toHaveLength(9);
  });

  test('injects click handler into <Square>s', () => {
    const spy = jest.spyOn(GameContext, 'useGameDispatch');
    const squares = [
      'O', '', '',
      '', '', '',
      '', '', ''
    ];
    const wrapper = mount(<GameContext.GameProvider><Board squares={squares} /></GameContext.GameProvider>);

    wrapper.find('button').first().simulate('click'); // No-op
    wrapper.find('button').at(2).simulate('click'); // Place an `X` top-middle.
    wrapper.render();

    expect(wrapper.find('Square').first().text()).toEqual('O');
    expect(wrapper.find('Square').at(2).text()).toEqual('X');
    expect(spy).toHaveBeenCalled();
  });
});

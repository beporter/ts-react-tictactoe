import { mount, shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Board } from '../src/Board';
import * as GameContext from '../src/GameContext';

const TestBoard = () => {
  const state = GameContext.useGameState();
  return (
    <Board squares={state.board} />
  );
};

describe('<Board />', () => {
  test('has nine squares', () => {
    const wrapper = mount(<GameContext.GameProvider><TestBoard /></GameContext.GameProvider>);

    expect(wrapper.find('Square')).toHaveLength(9);

    wrapper.unmount();
  });

  test('injects click handler into <Square>s', () => {
    const spy = jest.spyOn(GameContext, 'useGameDispatch');
    const wrapper = mount(<GameContext.GameProvider><TestBoard /></GameContext.GameProvider>);
    const btn0 = wrapper.find('button').at(0);
    const btn1 = wrapper.find('button').at(1);

    act(() => {
      btn0.prop('onClick')(null); // Place an `X` top-left.
      btn0.prop('onClick')(null); // No-op
      btn1.prop('onClick')(null); // Place an `O` top-middle.
      wrapper.update();
    });
  console.log(wrapper.find('button').debug());

    expect(btn0.text()).toEqual('X');
    expect(btn1.text()).toEqual('O');
    expect(spy).toHaveBeenCalled();

    wrapper.unmount();
  });
});

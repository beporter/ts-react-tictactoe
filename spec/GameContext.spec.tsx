import { mount, shallow } from 'enzyme';
import React from 'react';
import { GameProvider, useGameDispatch, useGameState } from '../src/GameContext';

const ParentWrapper = (props) => {
  return (
    <GameProvider>{props.children}</GameProvider>
  );
};

const ChildConsumer = (props) => {
  const state = useGameState();
  const dispatch = useGameDispatch();
  dispatch({type: 'move', position: 2});
  return (
    <div>foo</div>
  );
};

describe('GameContext', () => {
  test('it renders children content', () => {
    const wrapper = mount(<ParentWrapper><ChildConsumer /></ParentWrapper>);

    expect(wrapper.text()).toContain('foo');
  });
});

import { mount, shallow } from 'enzyme';
import React from 'react';
import { GameProvider, useGameDispatch, useGameState } from '../src/GameContext';

const ParentWrapper = (props) => {
  return (
    <GameProvider>{props.children}</GameProvider>
  );
};

const ChildConsumer = (props) => {
  return (
    <div>foo</div>
  );
};

describe('GameContext', () => {
  test('it renders children content', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValueOnce({xToPlay: true, board: []})
      .mockReturnValueOnce(() => undefined);

    const wrapper = mount(<ParentWrapper><ChildConsumer /></ParentWrapper>);

    expect(wrapper.text()).toContain('foo');
  });
});

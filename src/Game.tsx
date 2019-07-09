import React, { FunctionComponent } from 'react';
import { Board } from './Board';
import { useGameDispatch, useGameState } from './GameContext';

type Props = {};

export const Game: FunctionComponent<Props> = (props) => {
  const state = useGameState();
  const dispatch = useGameDispatch();
  const clickHandler = (position: number): void => {
    dispatch({type: 'move', position});
  };

  return (
    <div className="game">
      <p>Next to play: {state.xToPlay ? 'X' : 'O'}</p>
      <Board squares={state.board} clickHandler={clickHandler} />
    </div>
  );
};

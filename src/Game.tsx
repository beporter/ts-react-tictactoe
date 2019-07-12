import React from 'react';
import { Board } from './Board';
import { useGameState } from './GameContext';

type Props = {};

export const Game = (props: Props): JSX.Element => {
  const state = useGameState();

  return (
    <div className="game">
      <p>Next to play: {state.xToPlay ? 'X' : 'O'}</p>
      <Board squares={state.board} />
    </div>
  );
};

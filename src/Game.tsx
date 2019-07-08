import React, { FunctionComponent, useState } from 'react';
import { Board } from './Board';

type Props = {};

type State = {
  board: string[],
  xToPlay: boolean
};

export const Game: FunctionComponent<Props> = (props) => {
  const [state, setState] = useState<State>({
    board: Array(9).fill('*'),
    xToPlay: true
  });

  return (
    <div>
      <p>Next to play: {state.xToPlay ? 'X' : 'O'}</p>
      <Board squares={state.board} />
    </div>
  );
};

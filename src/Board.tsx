import React from 'react';
import { useGameDispatch } from './GameContext';
import { Square } from './Square';

type Props = {
  squares: string[];
};

export const Board = (props: Props): JSX.Element => {
  const dispatch = useGameDispatch();
  const board = props.squares.map((value: string, index: number, array: string[]) => {
    return (
      <div className="octothorp" key={index}>
        <Square value={value} clickHandler={(event) => value === '' ? dispatch({type: 'move', position: index}) : () => undefined} />
      </div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
};

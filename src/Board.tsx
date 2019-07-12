import React from 'react';
import { useGameDispatch } from './GameContext';
import { Square } from './Square';

type Props = {
  squares: string[];
};

export const Board = (props: Props): JSX.Element => {
  const dispatch = useGameDispatch();

  const board = props.squares.map((value: string, index: number) => {
    const callback = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (value === '') {
        return dispatch({type: 'move', position: index});
      }
    };
    return (
      <div className="octothorp" key={index}>
        <Square value={value} clickHandler={callback} />
      </div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
};

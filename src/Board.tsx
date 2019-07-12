import React from 'react';
import { Square } from './Square';

type Props = {
  squares: string[];
  onMove: (position: number) => void
};

export const Board = (props: Props): JSX.Element => {
  const board = props.squares.map((value: string, index: number) => {
    const callback = (event: React.MouseEvent<HTMLButtonElement>) => {
      props.onMove(index);
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

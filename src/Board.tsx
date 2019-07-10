import React from 'react';
import { Square } from './Square';

type Props = {
  squares: string[];
  clickHandler: (position: number) => void;
};

export const Board = (props: Props): JSX.Element => {
  const renderSquare = (mark: string, pos: number): JSX.Element => {
    return <Square value={mark} clickHandler={(event) => props.clickHandler(pos)} />;
  };

  const board = Array.from(Array(9).keys()).map((i: number) => {
    return (
      <div className="octothorp" key={i}>{renderSquare(props.squares[i], i)}</div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
};

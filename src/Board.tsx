import React, { FunctionComponent } from 'react';
import { Square } from './Square';

type Props = {
  squares: string[];
  clickHandler: Function;
};

export const Board: FunctionComponent<Props> = (props) => {
  const renderSquare = function(mark: string, pos: number): JSX.Element {
    return <Square value={mark} clickHandler={() => props.clickHandler(pos)} />;
  };

  const board = Array.from(Array(9).keys()).map(
    (i: number) => <div className="octothorp" key={i}>{renderSquare(props.squares[i], i)}</div>
  );

  return (
    <div className="board">{board}</div>
  );
};

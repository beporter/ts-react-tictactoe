import React from 'react';
import { Board } from './Board';

type State = {
  board: string[],
  xToPlay: boolean
};

export class Game extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      board: Array(9).fill(' '),
      xToPlay: true
    };
  }

  public render(): JSX.Element {
    return (
      <div className="game">
        <p>Next to play: {this.state.xToPlay ? 'X' : 'O'}</p>
        <Board squares={this.state.board} onMove={this.onMove} />
      </div>
    );
  }

  private onMove = (position: number): void => {
    let board = this.state.board;
    board[position] = this.state.xToPlay ? 'X' : 'O';

    this.setState({ board, xToPlay: !this.state.xToPlay });
  }
}

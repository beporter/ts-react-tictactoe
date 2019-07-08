import * as React from 'react';
import { Square } from './Square';

type Props = {
  squares: string[];
};

export class Board extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
  }

  protected renderSquare(mark: string): JSX.Element {
    return <Square value={mark} />;
  }

  public render(): JSX.Element {
    return (
      <div className="board">
        <div className="octothorp">{this.renderSquare(this.props.squares[0])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[1])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[2])}</div>

        <div className="octothorp">{this.renderSquare(this.props.squares[3])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[4])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[5])}</div>

        <div className="octothorp">{this.renderSquare(this.props.squares[6])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[7])}</div>
        <div className="octothorp">{this.renderSquare(this.props.squares[8])}</div>
      </div>
    );
  }
}

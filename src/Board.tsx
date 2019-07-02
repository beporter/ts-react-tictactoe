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
      <table className="board">
        <tr>
          <td>{this.renderSquare(this.props.squares[0])}</td>
          <td>{this.renderSquare(this.props.squares[1])}</td>
          <td>{this.renderSquare(this.props.squares[2])}</td>
        </tr>
        <tr>
          <td>{this.renderSquare(this.props.squares[3])}</td>
          <td>{this.renderSquare(this.props.squares[4])}</td>
          <td>{this.renderSquare(this.props.squares[5])}</td>
        </tr>
        <tr>
          <td>{this.renderSquare(this.props.squares[6])}</td>
          <td>{this.renderSquare(this.props.squares[7])}</td>
          <td>{this.renderSquare(this.props.squares[8])}</td>
        </tr>
      </table>
    );
  }
}

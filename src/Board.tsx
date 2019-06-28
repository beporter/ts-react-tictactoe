import * as React from 'react';
import Square from './Square';

type Props = {}

class Board extends React.Component {
    renderSquare(mark : string) {
        return (
            <Square value={mark} />
        );
    }
}

export default Board;

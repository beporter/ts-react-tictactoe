import * as React from 'react';

type Props = {
    value: string;
}

const Square = (props: Props) => {
    return (
        <button className="square">
            {props.value}
        </button>
    )
}

export default Square;
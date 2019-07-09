import * as React from 'react';

type Props = {
  value: string;
  clickHandler: Function;
};

export const Square = (props: Props): JSX.Element => {
  return (
    <div className="square">
      <button onClick={() => props.clickHandler()}>
        {props.value}
      </button>
    </div>
  );
};

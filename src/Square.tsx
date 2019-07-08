import * as React from 'react';

type Props = {
  value: string;
};

export const Square = (props: Props): JSX.Element => {
  return (
    <div className="square">
      <button>
        {props.value}
      </button>
    </div>
  );
};

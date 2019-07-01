import * as React from 'react';

type Props = {
  value: string;
};

export const Square = (props: Props) => {
  return (
    <button className="square">
      {props.value}
    </button>
  );
};

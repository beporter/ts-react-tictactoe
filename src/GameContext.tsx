import React, { useContext } from 'react';

type Action = {type: 'move', position: number};
type Props = {children: React.ReactNode};
type Dispatch = (action: Action) => void;
type State = {
  board: string[],
  xToPlay: boolean
};

const GameStateContext = React.createContext<State | undefined>(undefined);
const GameDispatchContext = React.createContext<Dispatch | undefined>(undefined);

function gameReducer(state: State, action: Action): State {
// tslint:disable-next-line: switch-default
  switch (action.type) {
    case 'move': {
      // @TODO: Mark the board, change xToPlay.
      return state;
    }
  }
}

function GameProvider({children}: Props): JSX.Element {
  const defaults = {
    board: Array(9).fill('*'),
    xToPlay: true
  };
  const [state, dispatch] = React.useReducer(gameReducer, defaults);

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

function useGameState(): State {
  const context = useContext(GameStateContext);
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useGameState must be used within a <GameProvider>');
  }
  return context;
}

function useGameDispatch(): Dispatch {
  const context = useContext(GameDispatchContext);
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within a <GameProvider>');
  }
  return context;
}

export { GameProvider, useGameState, useGameDispatch };
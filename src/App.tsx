import React from 'react';
import { Game } from './Game';
import { GameProvider } from './GameContext';

export const App: React.FC = () => {
  return (
    <div className="app">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
};

import React from 'react';
//import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <pre>{`
X | X | O
- - - - -
O | X |  
- - - - -
  | X | O
        `}</pre>
      </header>
    </div>
  );
}

export default App;

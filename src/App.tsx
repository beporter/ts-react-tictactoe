import React from "react";
// import "./App.css";

export const App: React.FC = () => {
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
};

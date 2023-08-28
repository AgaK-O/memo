import React from 'react';
import ReactDOM from 'react-dom/client';
import MemoGame from './components/memo-game/memo-game';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MemoGame />
  </React.StrictMode>
);


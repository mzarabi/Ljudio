import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayerContextProvider from './contexts/PlayerContext';
import UserContextProvider from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

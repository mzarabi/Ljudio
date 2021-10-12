import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayerContextProvider from './contexts/PlayerContext';
import ArtistContextProvider from './contexts/ArtistContext';
import UserContextProvider from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <ArtistContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ArtistContextProvider>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

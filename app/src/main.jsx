import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayerContextProvider from './contexts/PlayerContext';
import ArtistContextProvider from './contexts/ArtistContext';

ReactDOM.render(
  <React.StrictMode>
    <PlayerContextProvider>
      <ArtistContextProvider>
        <App />
      </ArtistContextProvider>
    </PlayerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

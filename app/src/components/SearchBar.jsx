import React, { useState, useEffect, useContext } from 'react';
import { ContextArtistId } from '../App';
import { useHistory } from 'react-router-dom';
import Player from './Player';
import { PlayerContext } from '../contexts/PlayerContext';

function SearchBar() {
  const [searchInput, setInput] = useState('');
  const [songs, setSongs] = useState();
  const [artist, setArtist] = useState();
  const [currentVideoId, setCurrentVideoId] = useState();
  const [context, setContext] = useContext(ContextArtistId);
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const history = useHistory();

  useEffect(() => {
    if (currentVideoId) {
    }
  }, [currentVideoId]);

  async function searchSong() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/songs/' + searchInput
    );
    let result = await response.json();
    setSongs(result.content);
  }
  async function searchArtist() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artists/' + searchInput
    );
    let result = await response.json();
    setArtist(result.content);
  }

  function songClick(song) {
    updateContext({ songID: song });
  }
  function artistClick(artist) {
    setContextPlayer(artist.browseId);
    history.push('/artist');
  }
  return (
    <div>
      <Player />
      <input
        type='text'
        placeholder='search songs'
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            searchArtist();
            searchSong();
          }
        }}
      />

      <hr />

      {artist &&
        artist.map((artist) => (
          <div onClick={() => artistClick(artist)}>
            {artist.name}
            <p style={{ fontSize: '10px' }}>Artist</p>
            <hr />
          </div>
        ))}

      {songs &&
        songs.map((song) => (
          <div onClick={() => songClick(song)}>
            {song.name}
            <p style={{ fontSize: '10px' }}>Song</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default SearchBar;

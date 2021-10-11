import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import Player from './Player';

import ArrowIcon from '../images/arrow.png';
import css from './Styling.module.css';

function SearchBar() {
  const [searchInput, setInput] = useState('');
  const [songs, setSongs] = useState();
  const [artist, setArtist] = useState();
  const [currentVideoId, setCurrentVideoId] = useState();
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const history = useHistory();

  let playList = [];

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

  function songClick(song, playList) {
    let playListIndex = playList.indexOf(song.videoId);
    console.log(playListIndex);
    updateContext({
      songID: song,
      index: playListIndex,
      playListArray: playList,
    });
  }

  function artistClick(artist) {
    history.push('/artist/' + artist.browseId);
  }

  return (
    <div>
      <div className={css.searchBar}>
        <a href='/'>
          <img src={ArrowIcon} className={css.backArrow} />
        </a>

        <input
          type='text'
          placeholder='Artists or songs'
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              searchArtist();
              searchSong();
            }
          }}
        />
      </div>

      <hr className={css.header}/>

      {artist &&
        artist.map((artist) => (
          <div className={css.artistOrSong}>
            <img src={artist.thumbnails[0].url} />
            <div className={css.thumbnails} onClick={() => artistClick(artist)}>
              {artist.name}
              <p style={{ fontSize: '12px' }}>Artist</p>
            </div>
            <hr />
          </div>
        ))}

      {songs &&
        songs.map(
          (song) => (
            playList.push(song.videoId),
            (
              <div className={css.artistOrSong}>
                <img
                  src={song.thumbnails[0].url}
                  onClick={() => artistClick(song.artist)}
                />
                <div
                  className={css.thumbnails}
                  onClick={() => songClick(song, playList)}>
                  {song.name}
                  <p style={{ fontSize: '12px' }}>Song • {song.artist.name}</p>
                </div>
                <hr />
              </div>
            )
          )
        )}
    </div>
  );
}

export default SearchBar;

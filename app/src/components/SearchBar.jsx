import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import { UserContext } from '../contexts/UserContext';

import playListAdd from '../images/playListAdd.png';
import css from './Styling.module.css';

function SearchBar() {
  const [searchInput, setInput] = useState('');
  const [songs, setSongs] = useState();
  const [artist, setArtist] = useState();
  const [currentVideoId, setCurrentVideoId] = useState();
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [userContextVal, updateUserContext] = useContext(UserContext);
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

  function saveToPlaylist(mySong) {
    userContextVal.myPlaylist.push(mySong);
  }

  return (
    <div className={css.scrollDown}>
      <div className={css.searchBar}>
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

      {artist &&
        artist.map((artist) => (
          <div
            onClick={() => artistClick(artist)}
            className={css.artistOrSongBox}>
            <div className={css.artistOrSongResult}>
              <img className={css.thumbnails} src={artist.thumbnails[0].url} />
              <div className={css.songArtistName}>
                <p>{artist.name}</p>

                <p style={{ fontSize: '80%' }}>Artist</p>
              </div>
            </div>
          </div>
        ))}

      {songs &&
        songs.map(
          (song) => (
            playList.push(song.videoId),
            (
              <div className={css.artistOrSongBox}>
                <div className={css.artistOrSongResult}>
                  <img
                    className={css.thumbnails}
                    src={song.thumbnails[0].url}
                    onClick={() => artistClick(song.artist)}
                  />
                  <div className={css.songArtistName}>
                    <p onClick={() => songClick(song, playList)}>{song.name}</p>
                    <p style={{ fontSize: '80%' }}>Song • {song.artist.name}</p>
                  </div>
                </div>
                <button
                  className={css.imgButton}
                  onClick={() => saveToPlaylist(song)}>
                  <img src={playListAdd} />
                </button>
              </div>
            )
          )
        )}
    </div>
  );
}

export default SearchBar;

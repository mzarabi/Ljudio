import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import { ArtistContext } from '../contexts/ArtistContext';
import Player from './Player';

import ArrowIcon from '../images/arrow.png';
import './SearchBar.css';

function SearchBar() {
  const [searchInput, setInput] = useState('');
  const [songs, setSongs] = useState();
  const [artist, setArtist] = useState();
  const [currentVideoId, setCurrentVideoId] = useState();
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [artistContextVal, updateArtistContext] = useContext(ArtistContext);
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

  async function artistClick(artist) {
    let albumList = [];
    let albumIdList = [];
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/' + artist.browseId
    );
    let result = await response.json();
    let albums = result.products.albums.content;
    for (let i = 0; i < albums.length; i++) {
      albumIdList.push(albums[i].browseId);
      albumList.push(albums[i].thumbnails[0].url);
    }
    updateArtistContext({
      artistName: result.name,
      artistPicture: result.thumbnails[0].url,
      shortDescription: result.description.substring(0, 300),
      fullDescription: result.description,
      albumIds: albumIdList,
      albumPictures: albumList,
    });

    history.push('/artist');
  }

  return (
    <div>
      <div className='searchbar'>
        <a href='/'>
          <img src={ArrowIcon} className='arrow-bar' />
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

      <hr id='header-bottom' />

      {artist &&
        artist.map((artist) => (
          <div className='search-artist-song'>
            <img src={artist.thumbnails[0].url} />
            <div className='thumbnails' onClick={() => artistClick(artist)}>
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
              <div className='search-artist-song'>
                <img
                  src={song.thumbnails[0].url}
                  onClick={() => artistClick(song.artist)}
                />
                <div
                  className='thumbnails'
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

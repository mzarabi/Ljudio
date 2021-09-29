import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchInput, setInput] = useState('');
  const [songs, setSongs] = useState();
  const [currentVideoId, setCurrentVideoId] = useState();

  async function searchSong() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/songs/' + searchInput
    );
    let result = await response.json();
    console.log(result.content);
    setSongs(result.content);
  }

  function songClick(song) {
    console.log(song.name);
    setCurrentVideoId(song.videoId);
    console.log(song.artist.browseId);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search songs"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            searchSong();
          }
        }}
      />
      <button onClick={searchSong}>Search</button>
      <hr />

      {songs &&
        songs.map((song) => (
          <div onClick={() => songClick(song)}>{song.name}</div>
        ))}
    </div>
  );
}

export default SearchBar;

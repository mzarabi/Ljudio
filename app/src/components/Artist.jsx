import React, { useState } from 'react';
import css from './Artist.module.css';

function Artist() {
  const [artist, setArtistName] = useState('');

  (async () => {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artists/elvis'
    );
    let result = await response.json();
    console.log(result.content[0].name);
    setArtistName(result.content[0].name);
  })();

  return (
    <div>
      <h1 className={css.name}>{artist}</h1>
    </div>
  );
}
export default Artist;

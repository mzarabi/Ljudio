import React, { useState } from 'react';
import css from './Artist.module.css';

function Artist() {
  const [artist, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();

  (async () => {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artists/elvis'
    );
    let result = await response.json();
    console.log(result.content[0].name);
    setArtistName(result.content[0].name);
    setArtistPicture(result.content[0].thumbnails[0].url);
  })();

  return (
    <div>
      <h1 className={css.name}>{artist}</h1>
      <div className={css.picture}>
        <img src={artistPicture} width='50%'></img>
      </div>
    </div>
  );
}
export default Artist;

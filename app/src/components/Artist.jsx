import React, { useEffect, useState } from 'react';
import css from './Artist.module.css';
import ArtistAlbums from './ArtistAlbums';

function Artist() {
  const [artist, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();
  const [artistDescription, setArtistDescription] = useState();

  (async () => {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/UCGexNm_Kw4rdQjLxmpb2EKw'
    );
    let result = await response.json();
    setArtistName(result.name);
    setArtistPicture(result.thumbnails[0].url);
    setArtistDescription(result.description);
  })();

  return (
    <div>
      <h1 className={css.name}>{artist}</h1>
      <div className={css.picture}>
        <img src={artistPicture}></img>
      </div>
      <div className={css.description}>
        <p>{artistDescription}</p>
      </div>
    </div>
  );
}
export default Artist;

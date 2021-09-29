import React, { useState, useEffect } from 'react';
import css from './Artist.module.css';

function Artist() {
  const [artist, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [artistAlbums, setArtistAlbums] = useState([]);

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/UClYV6hHlupm_S_ObS1W-DYw'
    );
    let result = await response.json();

    let albums = result.products.albums.content;
    for (let i = 0; i < albums.length; i++) {
      let albumPicture = albums[i].thumbnails[0].url;
      setArtistAlbums((artistAlbums) => [...artistAlbums, albumPicture]);
    }

    setArtistName(result.name);
    setArtistPicture(result.thumbnails[0].url);
    setArtistDescription(result.description);
  }

  return (
    <div>
      <h1 className={css.name}>{artist}</h1>
      <div className={css.picture}>
        <img src={artistPicture}></img>
      </div>
      <div className={css.description}>
        <p>{artistDescription}</p>
      </div>
      <div className={css.albums}>
        {artistAlbums.map((picture, i) => (
          <img className={css.pic} src={picture} key={i}></img>
        ))}
      </div>
    </div>
  );
}
export default Artist;

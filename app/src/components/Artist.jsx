import React, { useState, useEffect, useContext } from 'react';
import css from './Artist.module.css';
import { ContextArtistId } from '../App';

function Artist() {
  const [artist, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();
  const [artistDescription, setArtistDescription] = useState();
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [context, updateContext] = useContext(ContextArtistId);

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/' + context
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
      <div>
        {artistAlbums.map((picture, i) => (
          <img src={picture} key={i}></img>
        ))}
      </div>
    </div>
  );
}
export default Artist;

import React, { useState, useEffect } from 'react';
import css from './Artist.module.css';
import ShareArtist from './ShareArtist';
import { useParams } from 'react-router-dom';

function Artist() {
  const [artist, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();
  const [shortArtistDescription, setShortArtistDescription] = useState();
  const [fullArtistDescription, setFullArtistDescription] = useState();
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const { artistId } = useParams();

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/' + artistId
    );
    let result = await response.json();

    let albums = result.products.albums.content;
    for (let i = 0; i < albums.length; i++) {
      let albumPicture = albums[i].thumbnails[0].url;
      setArtistAlbums((artistAlbums) => [...artistAlbums, albumPicture]);
    }

    setArtistName(result.name);
    setArtistPicture(result.thumbnails[0].url);
    setShortArtistDescription(result.description.substring(0, 300));
    setFullArtistDescription(result.description);
  }

  return (
    <div>
      <h1 className={css.name}>{artist}</h1>
      <ShareArtist />
      <div className={css.picture}>
        <img src={artistPicture}></img>
      </div>
      <div className={css.description}>
        {showMore ? fullArtistDescription : shortArtistDescription}
        <div>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
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

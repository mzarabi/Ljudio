import React, { useState, useContext } from 'react';
import css from './Artist.module.css';
import ShareArtist from './ShareArtist';
import { useHistory } from 'react-router-dom';
import { ArtistContext } from '../contexts/ArtistContext';

function Artist() {
  const [artistContextVal, updateArtistContext] = useContext(ArtistContext);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   getArtistApi();
  // }, []);

  // async function getArtistApi() {
  //   let response = await fetch(
  //     'https://yt-music-api.herokuapp.com/api/yt/artist/' + artistId
  //   );
  //   let result = await response.json();

  //   let albums = result.products.albums.content;
  //   for (let i = 0; i < albums.length; i++) {
  //     let idAlbum = albums[i].browseId;
  //     let albumPicture = albums[i].thumbnails[0].url;
  //     setArtistAlbums((artistAlbums) => [...artistAlbums, albumPicture]);
  //     setIdOfAlbum((idOfAlbum) => [...idOfAlbum, idAlbum]);
  //   }

  //   setArtistName(result.name);
  //   setArtistPicture(result.thumbnails[0].url);
  //   setShortArtistDescription(result.description.substring(0, 300));
  //   setFullArtistDescription(result.description);
  // }

  function albumClick(i) {
    history.push('/album/' + artistContextVal.albumIds[i]);
  }
  return (
    <div>
      <h1 className={css.name}>{artistContextVal.artistName}</h1>
      <ShareArtist />
      <div className={css.picture}>
        <img src={artistContextVal.artistPicture}></img>
      </div>
      <div className={css.description}>
        {showMore
          ? artistContextVal.fullDescription
          : artistContextVal.shortDescription}
        <div className={css.showButton}>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
      <div className={css.albums}>
        {artistContextVal.albumPictures.map((picture, i) => (
          <img
            className={css.pic}
            src={picture}
            onClick={() => albumClick(i)}
            key={i}></img>
        ))}
      </div>
    </div>
  );
}
export default Artist;

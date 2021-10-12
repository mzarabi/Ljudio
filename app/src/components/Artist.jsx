import React, { useState, useContext } from 'react';
import css from './Styling.module.css';
import backButton from '../images/back.png';

import ShareArtist from './ShareArtist';
import { useHistory } from 'react-router-dom';
import { ArtistContext } from '../contexts/ArtistContext';

function Artist() {
  const [artistContextVal, updateArtistContext] = useContext(ArtistContext);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();

  function albumClick(i) {
    history.push('/album/' + artistContextVal.albumIds[i]);
  }

  return (
    <div>
      <button className={css.back} onClick={history.goBack}>
        <img src={backButton} />
      </button>
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

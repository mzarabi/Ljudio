import React, { useState, useEffect } from 'react';
import css from './Styling.module.css';
import backButton from '../images/back.png';

import ShareArtist from './ShareArtist';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Artist() {
  const [artistName, setArtistName] = useState();
  const [artistPicture, setArtistPicture] = useState();
  const [artistShortDesc, setArtistShortDesc] = useState();
  const [artistFullDesc, setArtistFullDesc] = useState();
  const [artistIdList, setArtistIdList] = useState([]);
  const [artistAlbumPictures, setArtistAlbumPictures] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();
  const { artistId } = useParams();

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let albumList = [];
    let albumIdList = [];
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/' + artistId
    );
    let result = await response.json();
    let albums = result.products.albums.content;
    for (let i = 0; i < albums.length; i++) {
      albumIdList.push(albums[i].browseId);
      albumList.push(albums[i].thumbnails[0].url);
    }
    setArtistName(result.name);
    setArtistPicture(result.thumbnails[0].url);
    setArtistShortDesc(result.description.substring(0, 300));
    setArtistFullDesc(result.description);
    setArtistIdList(albumIdList);
    setArtistAlbumPictures(albumList);
  }

  function albumClick(i) {
    history.push('/album/' + artistIdList[i]);
  }

  return (
    <div>
      <div className={css.artistButtons}>
        <button className={css.back} onClick={history.goBack}>
          <img src={backButton} />
        </button>
        <ShareArtist />
      </div>
      <h1 className={css.name}>{artistName}</h1>
      <div className={css.picture}>
        <img src={artistPicture}></img>
      </div>
      <div className={css.description}>
        {showMore ? artistFullDesc : artistShortDesc}
        <div className={css.showButton}>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
      <div className={css.albums}>
        {artistAlbumPictures.map((picture, i) => (
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

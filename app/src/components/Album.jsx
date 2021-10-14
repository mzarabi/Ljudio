import React, { useEffect, useState, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { UserContext } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
import css from './Styling.module.css';
import backButton from '../images/back.png';
import { useHistory } from 'react-router-dom';
import playListAdd from '../images/playListAdd.png';

function Album() {
  const [songList, setSongList] = useState([]);
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [userContextVal, updateUserContext] = useContext(UserContext);
  const [albumPicture, setAlbumPicture] = useState();
  const { albumId } = useParams();
  const history = useHistory();

  let playList = [];

  useEffect(() => {
    getAlbumApi();
  }, []);

  async function getAlbumApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/album/' + albumId
    );
    let result = await response.json();
    setSongList(result.tracks);
    setAlbumPicture(result.thumbnails[3].url);
   
  }
  function songClick(song, playList) {
    let playListIndex = playList.indexOf(song.videoId);
    updateContext({
      songID: song,
      index: playListIndex,
      playListArray: playList,
    });
  }
  function saveToPlaylist(mySong) {
    userContextVal.myPlaylist.push(mySong);
  }

  return (
    <div className={css.scrollDown}>
      <button className={css.back} onClick={history.goBack}>
        <img src={backButton} />
      </button>
      <div className={css.albums}>
        <img className={css.albumPlaylistPic} src={albumPicture} />
      </div>
      {songList &&
        songList.map(
          (song) => (
            playList.push(song.videoId),
            (
              <div className={css.artistOrSongBox}>
                <div
                  className={css.songBox}
                  value={song.videoId}
                  onClick={() => songClick(song, playList)}>
                  {song.name}
                </div>
                <button
                  className={css.imgButton}
                  onClick={() => saveToPlaylist(song)}>
                  <img src={playListAdd} />
                </button>
              </div>
            )
          )
        )}
    </div>
  );
}

export default Album;

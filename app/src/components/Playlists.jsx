import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PlayerContext } from '../contexts/PlayerContext';
import { useHistory } from 'react-router-dom';
import css from '../components/Styling.module.css';

import removeIcon from '../images/remove.png';
import backButton from '../images/back.png';

function Playlists() {
  const [userContextVal, setUserContextVal] = useContext(UserContext);
  const [playerContextVal, updateContext] = useContext(PlayerContext);
  const history = useHistory();
  let playList = [];

  function songClick(song, playList) {
    let playListIndex = playList.indexOf(song.videoId);
    console.log(playListIndex);
    updateContext({
      songID: song,
      index: playListIndex,
      playListArray: playList,
    });
  }

  function handleRemove(index) {
    userContextVal.myPlaylist.splice(index, 1);
    history.push('/playlist');
  }

  return (
    <div className={css.scrollDown}>
      <button className={css.back} onClick={history.goBack}>
        <img src={backButton} />
      </button>
      {userContextVal.myPlaylist.map(
        (song, i) => (
          playList.push(song.videoId),
          (
            <div className={css.artistOrSongBox}>
              <div className={css.artistOrSongResult}>
                <img className={css.thumbnails} src={song.thumbnails[0].url} />
                <div
                  className={css.songArtistName}
                  onClick={() => songClick(song, playList)}>
                  <p>{song.name}</p>
                  <p style={{ fontSize: '80%' }}>Song • {song.artist.name}</p>
                </div>
              </div>
              <button className={css.imgButton}>
                <img src={removeIcon} onClick={() => handleRemove(i)} />
              </button>
            </div>
          )
        )
      )}
    </div>
  );
}

export default Playlists;

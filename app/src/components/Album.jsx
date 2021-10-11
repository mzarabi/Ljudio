import React, { useEffect, useState, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import { useParams } from 'react-router-dom';
import css from './Styling.module.css';

function Album() {
  const [songList, setSongList] = useState([]);
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const { albumId } = useParams();

  let playList = [];

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/album/' + albumId
    );
    let result = await response.json();
    setSongList(result.tracks);
  }
  function songClick(song, playList) {
    let playListIndex = playList.indexOf(song.videoId);
    updateContext({
      songID: song,
      index: playListIndex,
      playListArray: playList,
    });
  }

  return (
    <div>
      {songList &&
        songList.map(
          (song) => (
            playList.push(song.videoId),
            (
              <div className={css.artistOrSong}>
                <div
                  className={css.thumbnails}
                  value={song.videoId}
                  onClick={() => songClick(song, playList)}>
                  {song.name}
                </div>
                <hr />
              </div>
            )
          )
        )}
    </div>
  );
}

export default Album;

import React, { useEffect, useState, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

function Album() {
  const [songList, setSongList] = useState([]);
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);

  let playList = [];

  useEffect(() => {
    getArtistApi();
  }, []);

  async function getArtistApi() {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/album/MPREb_j9hW0m0Ba8H'
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
              <div className='search-artist-song'>
                <div
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

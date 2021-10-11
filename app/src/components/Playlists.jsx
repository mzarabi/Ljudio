import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PlayerContext } from '../contexts/PlayerContext';

function Playlists() {
  const [userContextVal, setUserContextVal] = useContext(UserContext);
  const [playerContextVal, updateContext] = useContext(PlayerContext);

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

  return (
    <div>
      {userContextVal.myPlaylist.map(
        (song) => (
          playList.push(song.videoId),
          (
            <div>
              <img src={song.thumbnails[0].url} />
              <div onClick={() => songClick(song, playList)}>
                <p>{song.name}</p>
              </div>
              <hr />
            </div>
          )
        )
      )}
    </div>
  );
}

export default Playlists;

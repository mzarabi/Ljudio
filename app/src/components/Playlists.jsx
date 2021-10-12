import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { PlayerContext } from '../contexts/PlayerContext';
import { useHistory } from 'react-router-dom';

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
    userContextVal.myPlaylist.splice(index,1)
    history.push('/user')
  }

  return (
    <div>
      {userContextVal.myPlaylist.map(
        (song, i) => (
          playList.push(song.videoId),
          (
            <div>
              <img src={song.thumbnails[0].url} />
              <div onClick={() => songClick(song, playList)}>
                <p>{song.name}</p>            
              </div>
              <button onClick= {() => handleRemove(i)}>Remove</button>
              <hr />
            </div>
          )
        )
      )}
    </div>
  );
}

export default Playlists;

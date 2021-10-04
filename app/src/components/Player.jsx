import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import Progressbar from './ProgressBar';

function Player() {
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [player, setPlayer] = useState();

  useEffect(() => {
    loadPlayer();
  }, []);

  useEffect(() => {
    if (contextPlayerVal.songID) {
      playSong(contextPlayerVal.songID);
    }
  }, [contextPlayerVal]);

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    setPlayer(ytPlayer);

    updateContext({
      player: ytPlayer,
    });
  }

  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return;
  }

  function playSong(contextPlayerVal) {
    console.log(contextPlayerVal);
    player.loadVideoById(contextPlayerVal);
  }

  function resumeSong() {
    player.playVideo();
  }

  function pauseSong() {
    player.pauseVideo();
  }

  return (
    <div>
      <div id='yt-player'></div>

      <div>
        <button onClick={resumeSong}>Play</button>
        <button onClick={pauseSong}>Pause</button>
      </div>
      <Progressbar />
    </div>
  );
}

export default Player;

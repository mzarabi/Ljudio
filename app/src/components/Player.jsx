import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextVideoId } from '../App';

// props with a function to update song
function Player() {
  const [contextPlayerVal, setContextPlayer] = useContext(ContextVideoId);
  const [player, setPlayer] = useState();
  //load player when this component mounts
  useEffect(() => {
    loadPlayer();
  }, []);

  useEffect(() => {
    if (contextPlayerVal) {
      playSong(contextPlayerVal);
    }
  }, [contextPlayerVal]);

  // // run this every time videoId changes

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    setPlayer(ytPlayer);
  }

  // this function triggers when we change song in player
  // can be used to update things, like counters
  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return;
  }

  function playSong(contextPlayerVal) {
    console.log('Play song');
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
      <div id="yt-player"></div>

      <div>
        <button onClick={resumeSong}>Play</button>
        <button onClick={pauseSong}>Pause</button>
      </div>
    </div>
  );
}

export default Player;

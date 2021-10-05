import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import Progressbar from './ProgressBar';

import playIcon from '../images/play.png';
import pauseIcon from '../images/pause.png';
import nextIcon from '../images/next.png';
import previousIcon from '../images/previous.png';

function Player() {
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [player, setPlayer] = useState();

  useEffect(() => {
    loadPlayer();
  }, []);

  useEffect(() => {
    if (contextPlayerVal.songID) {
      playSong(contextPlayerVal);
    }
  }, [contextPlayerVal]);

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      playerVars: {'autoplay': 1},
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
    player.loadPlaylist(contextPlayerVal.playListArray, contextPlayerVal.index)
  }

  function resumeSong() {
    player.playVideo();
  }

  function pauseSong() {
    player.pauseVideo();
  }

  function playNext() {
    player.nextVideo()
  }
  function playPrevious() {
    player.previousVideo()
  }

  return (
    <div>
      <div id='yt-player'></div>

      <div>
        <img src={previousIcon} onClick={playPrevious} height={45} width={45} />
        <img src={playIcon} onClick={resumeSong} height={45} width={45} />
        <img src={pauseIcon} onClick={pauseSong} height={45} width={45} />
        <img src={nextIcon} onClick={playNext} height={45} width={45}/>
      </div>
      <Progressbar />
    </div>
  );
}

export default Player;

import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import Progressbar from './ProgressBar';
import css from './Styling.module.css';

import playIcon from '../images/play.png';
import pauseIcon from '../images/pause.png';
import nextIcon from '../images/next.png';
import previousIcon from '../images/previous.png';

function Player() {
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [player, setPlayer] = useState();
  const [playPause, setPlayPause] = useState(playIcon);

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
    setPlayPause(pauseIcon);
  }
/*
  function resumeSong() {
    player.playVideo();
  }

  function pauseSong() {
    player.pauseVideo();
  }
*/
  function playNext() {
    player.nextVideo()
  }
  function playPrevious() {
    player.previousVideo()
  }

   function toggleIcon() {
     if (playPause === pauseIcon) {
       setPlayPause(playIcon);
       player.pauseVideo();
     }
     else {
       setPlayPause(pauseIcon);
       player.playVideo();
     }
  }

  return (
    <div>
      <div id='yt-player'></div>

      <div className={css.panel}>
        <img src={previousIcon} onClick={playPrevious} height={70} width={70} className={css.panelButton}/>
        <img src={playPause} onClick={toggleIcon} height={70} width={70} className={css.panelButton}/>
        <img src={nextIcon} onClick={playNext} height={70} width={70} className={css.panelButton}/>
      </div>
      <Progressbar />
    </div>
  );
}

export default Player;

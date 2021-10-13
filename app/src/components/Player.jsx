import React, { useState, useEffect, useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';
import Progressbar from './ProgressBar';
import css from './Styling.module.css';

import playIcon from '../images/play.png';
import pauseIcon from '../images/pause.png';
import nextIcon from '../images/next.png';
import previousIcon from '../images/previous.png';
import repeatButtonOff from '../images/repeat_OFF.png';
import repeatButtonOn from '../images/repeat_ON.png';
import shuffleIconOff from '../images/shuffle_OFF.png';
import shuffleIconOn from '../images/shuffle_ON.png';

function Player() {
  const [contextPlayerVal, updateContext] = useContext(PlayerContext);
  const [player, setPlayer] = useState();
  const [playPause, setPlayPause] = useState(playIcon);
  const [repeat, setRepeat] = useState(repeatButtonOff);
  const [shuffle, setShuffle] = useState(shuffleIconOff);
  

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
      playerVars: { autoplay: 1 },
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
    player.loadPlaylist(contextPlayerVal.playListArray, contextPlayerVal.index);
    setPlayPause(pauseIcon);
  }
  
  function playNext() {
    player.nextVideo();
  }
  function playPrevious() {
    player.previousVideo();
  }

  function toggleIcon() {
    if (playPause === pauseIcon) {
      setPlayPause(playIcon);
      player.pauseVideo();
    } else {
      setPlayPause(pauseIcon);
      player.playVideo();
    }
  }
  function toggleRepeat() {
    
    // Toggle OFF
    if (repeat === repeatButtonOn) {
      setRepeat(repeatButtonOff);
      // player.setLoop(false)
      // player.loadPlaylist(contextPlayerVal.playListArray, contextPlayerVal.index);
      /*
      
      Jämföra nuvarande videoID med gamla spellistans alla videoID's och ta ut det indexet
      köa en playlist som startar på index efter nuvarande låt.

      */
    }//Toggle ON
    else {
      setRepeat(repeatButtonOn);
      
      let currentIndex = player.getPlaylistIndex();
      let currentSong = [];
      for (let i=0; i<contextPlayerVal.playListArray.length; i++){
        if(i === currentIndex) {
          player.cueVideoById(contextPlayerVal.playListArray[i])
        //   currentSong.push(contextPlayerVal.playListArray[i])
        //  updateContext({playListArray: currentSong})
        }
      }
      // player.playSong(contextPlayerVal.playListArray)
      //   player.cuePlaylist(contextPlayerVal.playListArray)
      //   player.setLoop(true)
    }
  }
  function toggleShuffle() {
    //toggle shuffle OFF
    if (shuffle === shuffleIconOn) {
      setShuffle(shuffleIconOff);
      player.setShuffle(false)     
    } //toggle shuffle ON
    else {
      setShuffle(shuffleIconOn); 
      player.setShuffle(true)
    }
  }
console.log(contextPlayerVal.playListArray);
  return (
    <div>
      <div id='yt-player'></div>

      <div className={css.playerBox}>
        <div className={css.playerButtons}>
          <img src={repeat} onClick={toggleRepeat} />
          <img src={previousIcon} onClick={playPrevious} />
          <img src={playPause} onClick={toggleIcon} />
          <img src={nextIcon} onClick={playNext} />
          <img src={shuffle} onClick={toggleShuffle} />
        </div>
        <Progressbar />
      </div>
    </div>
  );
}

export default Player;

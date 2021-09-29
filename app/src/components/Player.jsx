import React, { useState, useEffect } from 'react'

import pauseButton from './player_components/pauseButton'
import playButton from './player_components/playButton'
import nextButton from './player_components/nextButton'
import previousButton from './player_components/previousButton'
import shuffleButton from './player_components/shuffleButton'
import repeatbutton from './player_components/repeatbutton'
import progressBar from './player_components/progressBar'

function Player({ videoId }) {
  useEffect(() => {
    loadPlayer()
  }, [])

  useEffect(() => {
    if(videoId) {
      playSong(videoId)
    }
  }, [videoId])

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });

    setPlayer(ytPlayer)
  }

  
  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return
  }

  

  return (
    <div>
      <div id="yt-player"></div>
      <div id="buttons"></div>
      <div id="progress-bar" event={() => progressBar()}></div>
    </div>
  )
}

export default Player

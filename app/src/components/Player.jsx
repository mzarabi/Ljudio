import React, { useState, useEffect } from 'react'

import pauseButton from './player_components/pauseButton'
import playButton from './player_components/playButton'

function Player({ videoId }) {
  useEffect(() => {
    loadPlayer()
  }, [])

  useEffect(() => {
    if(videoId) {
      playSong(videoId)
    }
  }, [videoId])

  const [player, setPlayer] = useState()

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

      <div>
        
        
        <button onClick={nextSong}>Next</button>
        <button onClick={previousSong}>Previous</button>
        <button onClick={toggleRepeat}>Repeat</button>
        <button onClick={toggleShuffle}>Shuffle</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Player

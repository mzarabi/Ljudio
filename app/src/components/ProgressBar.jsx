import React, { useState, useContext, useEffect } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function Progressbar() {
  const [context, updateContext] = useContext(PlayerContext)
  const [progress, setProgress] = useState(0)
  const [pauseUpdate, setPauseUpdate] = useState(false)

  useEffect(() => {
    if(!context.player) return 

    setInterval(() => {
      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = (currentTime / duration) * 100

      // TODO: don't update when user is moving the slider
      setProgress(playedPercent)
    }, 100)
  }, [context.player])

  function changeSongPosition(e) {
    setProgress(e.target.value)

    let newPosition = context.player.getDuration() / e.target.value

    // change position in song
    context.player.seekTo(newPosition, true)
  }

  return (
    <div>
      <input 
        className="slider"
        value={progress}
        onChange={changeSongPosition} 
        type="range" 
        style={{width: '100%'}}
      />
    </div>
  )
}

export default Progressbar


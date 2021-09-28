import React from 'react'

function pauseSong() {
    player.pauseVideo();
  }

function pauseButton() {
  return (
    <div>
      <button onClick={pauseSong}>Pause</button>
    </div>
  )
}

export default pauseButton

import React from 'react'

function playSong(videoId) {
  player.loadVideoById(videoId);
}

function playButton() {
  return (
    <div>
      <button onClick={playSong}>Play</button>
    </div>
  )
}

export default playButton

import React, {player} from 'react'

const [song, setSong] = useState(initialState)

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

import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler />
    </div>
  )
}

//needs to render the current state of time passed in percentage
const Filler = (props) => {
  return (<div className="filler" />)
}

function progressBar() {
  return (<ProgressBar />)
}

export default progressBar

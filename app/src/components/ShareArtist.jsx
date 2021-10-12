import React, { useState } from 'react';
import shareIcon from '../images/share.png';
import checkIcon from '../images/check.png';
import css from './Styling.module.css';

function ShareArtist() {
  const [copied, setCopied] = useState(false);

  function copyURL() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    alert('Copied artist');
  }

  return (
    <div>
      <div>
        <button className={css.shareButton} onClick={copyURL}>
          {!copied ? <img src={shareIcon} /> : <img src={checkIcon} />}
        </button>
      </div>
    </div>
  );
}

export default ShareArtist;

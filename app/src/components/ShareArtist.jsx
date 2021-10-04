import React, { useState } from 'react';

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
  }

  return (
    <div>
      <div>
        <button onClick={copyURL}>{!copied ? 'Share' : 'Copied!'}</button>
      </div>
    </div>
  );
}

export default ShareArtist;

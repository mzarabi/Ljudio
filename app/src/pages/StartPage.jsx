import React from 'react';
import css from '../components/Styling.module.css';
import StartAlbums from '../components/StartAlbums';

function StartPage() {
  return (
    <div>
      <h1 className={css.title}>LJUDIO</h1>
      <StartAlbums />
    </div>
  );
}

export default StartPage;

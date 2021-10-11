import React from 'react';
import css from '../components/Styling.module.css';


function StartPage() {
  return (
    <div className={css.searchBar}>
      <h1 className={css.title}>WELCOME</h1>

      <a href= '\search'>
          <input
          type='text'
          placeholder='Artists or songs'
        />
        </a>
    
    </div>
  );
}

export default StartPage;

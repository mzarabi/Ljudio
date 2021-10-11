import React from 'react';
import css from '../components/Styling.module.css';


function StartPage() {
  return (
    <div>
      <h1 className={css.title}>WELCOME
      </h1>
      
      <div className={css.searchBar}>

      <a href= '\search'>
          <input
          type='text'
          placeholder='Artists or songs'
        />
        </a>
        </div>
    
    </div>
  );
}

export default StartPage;

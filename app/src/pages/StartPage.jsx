import React from 'react';
import '../App.css';
import './StartPage.css';

function StartPage() {
  return (
    <div className='searchbar'>
      <h1>WELCOME</h1>

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

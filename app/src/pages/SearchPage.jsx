import React from 'react';

import SearchBar from '../components/SearchBar';
import css from '../components/Styling.module.css';


function SearchPage() {
  return (
    <div className={css.scrollDown}>
          <SearchBar />
    </div>
  );
}

export default SearchPage;

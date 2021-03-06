import React, { useState } from 'react';
import Player from './components/Player';
import css from './components/Styling.module.css';

// import routing components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import page components
import StartPage from './pages/StartPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import UserPage from './pages/UserPage';
import PlaylistPage from './pages/PlaylistPage';

import homeIconOf from './images/homepage.png';
import homeIconOn from './images/homepage_ON.png';
import searchIconOf from './images/search.png';
import searchIconOn from './images/search_ON.png';
import libraryIconOf from './images/library.png';
import libraryIconOn from './images/library_ON.png';

function App() {
  const [homeOnOf, setHomeOnOf] = useState(homeIconOn);
  const [searchOnOf, setSearchOnOf] = useState(searchIconOf);
  const [libraryOnOf, setLibraryOnOf] = useState(libraryIconOf);

  function toggleHomeIcon() {
    if (homeOnOf === homeIconOn) {
      setSearchOnOf(searchIconOf);
      setLibraryOnOf(libraryIconOf);
    } else if (homeOnOf === homeIconOf) {
      setHomeOnOf(homeIconOn);
      setSearchOnOf(searchIconOf);
      setLibraryOnOf(libraryIconOf);
    }
  }

  function toggleSearchIcon() {
    if (searchOnOf === searchIconOf) {
      setSearchOnOf(searchIconOn);
      setHomeOnOf(homeIconOf);
      setLibraryOnOf(libraryIconOf);
    }
  }

  function toggleLibraryIcon() {
    if (libraryOnOf === libraryIconOf) {
      setLibraryOnOf(libraryIconOn);
      setSearchOnOf(searchIconOf);
      setHomeOnOf(homeIconOf);
    }
  }

  return (
    <div className='App'>
      <div>
        <Player />
      </div>
      <Router>
        <nav className={css.navBar}>
          <Link to='/' className={css.navImage}>
            <img
              src={homeOnOf}
              onClick={toggleHomeIcon}
              height={30}
              width={30}
            />
          </Link>

          <Link to='/search' className={css.navImage}>
            <img
              src={searchOnOf}
              onClick={toggleSearchIcon}
              height={30}
              width={30}
            />
          </Link>

          <Link to='/user' className={css.navImage}>
            <img
              src={libraryOnOf}
              onClick={toggleLibraryIcon}
              height={30}
              width={30}
            />
          </Link>
        </nav>

        <main>
          <Route path='/' exact component={StartPage} />
          <Route path='/search' exact component={SearchPage} />
          <Route path='/artist/:artistId' exact component={ArtistPage} />
          <Route path='/user' exact component={UserPage} />
          <Route path='/playlist' exact component={PlaylistPage} />
          <Route path='/album/:albumId' exact component={AlbumPage} />
        </main>
      </Router>
    </div>
  );
}

export default App;

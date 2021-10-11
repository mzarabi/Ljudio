import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';

// import routing components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import page components
import StartPage from './pages/StartPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import UserPage from './pages/UserPage';

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
    <div className="App">
      <div className="playerBox">
        <Player />
      </div>
      <Router>
        <nav className="bottom-nav">
          <Link to="/" className="img-tab">
            <img
              src={homeOnOf}
              onClick={toggleHomeIcon}
              height={45}
              width={45}
            />
          </Link>

          <Link to="/search" className="img-tab">
            <img
              src={searchOnOf}
              onClick={toggleSearchIcon}
              height={40}
              width={45}
            />
          </Link>

          <Link to="/user" className="img-tab">
            <img
              src={libraryOnOf}
              onClick={toggleLibraryIcon}
              height={40}
              width={50}
            />
          </Link>
        </nav>

        <main>
          <Route path="/" exact component={StartPage} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/artist" exact component={ArtistPage} />
          <Route path="/user" exact component={UserPage} />
          <Route path="/album/:albumId" exact component={AlbumPage} />
        </main>
      </Router>
    </div>
  );
}

export default App;

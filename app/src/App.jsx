import React from 'react';
import './App.css';

// import routing components
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import page components
import StartPage from './pages/StartPage';
import SearchPage from './pages/SearchPage';
import ArtistPage from './pages/ArtistPage';

import homeIcon from './images/homepage.png';
import searchIcon from './images/search.png';
import playListIcon from './images/library.png';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='bottom-nav'>
          <Link to='/' className='img-tab'>
            <img src={homeIcon} height={45} width={45} />
          </Link>

          <Link to='/search' className='img-tab'>
            <img src={searchIcon} height={40} width={45} />
          </Link>

          <Link to='/artist' className='img-tab'>
            <img src={playListIcon} height={40} width={50} />
          </Link>
        </nav>

        <main>
          <Route path='/' exact component={StartPage} />
          <Route path='/search' exact component={SearchPage} />
          <Route path='/artist/:artistId' exact component={ArtistPage} />
        </main>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useContext, useEffect } from 'react';
import Playlists from './Playlists';
import { UserContext } from '../contexts/UserContext';
import css from '../components/Styling.module.css';

function User() {
  const [userContextVal, setUserContextVal] = useContext(UserContext);

  return (
    <div>
      <h1 className={css.title}>Hey {userContextVal.userName}!</h1>
      <h3>Your favourites:</h3>
      <Playlists />
    </div>
  );
}

export default User;

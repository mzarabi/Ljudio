import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import css from '../components/Styling.module.css';
import { useHistory } from 'react-router-dom';
import playlist from '../images/playlist.jpeg';

function User() {
  const [userContextVal, setUserContextVal] = useContext(UserContext);
  const history = useHistory();

  return (
    <div>
      <h1 className={css.name}>Hey {userContextVal.userName}!</h1>
      <h3 className={css.smallTitle}>Your playlists</h3>
      <div onClick={() => history.push('/playlist')} className={css.albums}>
        <img className={css.pic} src={playlist} />
      </div>
    </div>
  );
}

export default User;

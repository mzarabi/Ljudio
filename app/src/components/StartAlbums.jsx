import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import css from './Styling.module.css';


function startAlbums() {
  const [albumPicture, setAlbumPicture] = useState();
  const [result, setResult] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getStartAlbumApi()
  }, [])
  
  async function getStartAlbumApi() {
    let preDefAlbums = ['MPREb_jPOYfjGgApr', 'MPREb_Bz9AW81qtsl', 'MPREb_Y5ebh1nnQs5', 'MPREb_CtQnSJqssib'];
    
      for(let i = 0; i<preDefAlbums.length;i++) {
        let response = await fetch(
          'https://yt-music-api.herokuapp.com/api/yt/album/' + preDefAlbums[i]
        );
        let res = await response.json();
        setResult(result=> [...result, res])
      }   
  }
  
  return (
    <div>
      <h3 className={css.smallTitle}>Albums you might like</h3>
      <div className={css.albums}>
      {result.map((pic) => 
        <img className={css.pic}
          src={pic.thumbnails[3].url}
          onClick={() => history.push('/album/' + pic.browseId) }/>
      )}
      </div>
      
    </div>
  )
}

export default startAlbums

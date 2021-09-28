import React, { useState } from 'react';

function ArtistAlbums() {
  const [artistAlbums, setArtistAlbums] = useState();

  (async () => {
    let response = await fetch(
      'https://yt-music-api.herokuapp.com/api/yt/artist/UCGexNm_Kw4rdQjLxmpb2EKw'
    );
    let result = await response.json();
    let albums = result.products.albums.content;
    for (let i = 0; i < albums.length; i++) {
      let albumPicture = albums[i].thumbnails[0].url;
      console.log(albumPicture);

      setArtistAlbums([...artistAlbums, albumPicture]);
    }
  })();
  return <div>{artistAlbums}</div>;
}

export default ArtistAlbums;

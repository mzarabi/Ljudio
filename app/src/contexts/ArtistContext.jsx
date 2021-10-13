import React, { createContext, useState } from 'react';

export const ArtistContext = createContext();

function ArtistContextProvider(props) {
  const [context, setContext] = useState({
    artistName: '',
    artistPicture: '',
    shortDescription: '',
    fullDescription: '',
    albumPictures: [],
    albumIds: [],
  });

  // function updateContext(values) {
  //   setContext({
  //     ...context,
  //     ...values,
  //   });
  // }

  return (
    <ArtistContext.Provider value={[context, setContext]}>
      {props.children}
    </ArtistContext.Provider>
  );
}

export default ArtistContextProvider;

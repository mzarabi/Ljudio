import React, { createContext, useState } from 'react';

export const ArtistContext = createContext();

function ArtistContextProvider(props) {
  const [context, setContext] = useState({});

  function updateContext(values) {
    setContext({
      ...context,
      ...values,
    });
  }

  return (
    <ArtistContext.Provider value={[context, updateContext]}>
      {props.children}
    </ArtistContext.Provider>
  );
}

export default ArtistContextProvider;

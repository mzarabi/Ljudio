import React, { createContext, useState } from 'react';

export const UserContext = createContext();

function UserContextProvider(props) {
  const [context, setContext] = useState({
    userName: 'buddy',
    passWord: 123,
    myPlaylist: [],
  });

  function updateContext(values) {
    setContext({
      ...context,
      ...values,
    });
  }

  return (
    <UserContext.Provider value={[context, updateContext]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

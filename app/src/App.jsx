import { useState } from 'react';
import './App.css';
import ArtistPage from './pages/ArtistPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Ljudio</h1>
      <ArtistPage></ArtistPage>
    </div>
  );
}

export default App;

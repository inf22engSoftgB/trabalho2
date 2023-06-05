import './App.css';
import { Routes,Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Playlists from './pages/Playlists';
import Songs from './pages/Songs';
import Navigation from './components/Navigation';

function App() {
  const machineHost = 'http://localhost:3333'
  const sufix = '/api/'
  return (
    <>
    <Navigation />
    <main>
    <Routes>
        <Route index element={<Authentication url={machineHost} api={sufix}/>} />
        <Route exact path="/playlists"  element={<Playlists url={machineHost} api={sufix}/>} />
        <Route exact path="/songs"  element={<Songs url={machineHost} api={sufix} />} />
    </Routes>
    </main>
    </>
  );
}

export default App;

import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
    <div className="App">
      <header className="App-header">
        <NavLink className={({ isActive }) => isActive ? 'App-link font-bold' : 'App-link  font-thin'}  
           to="/">Authentication</NavLink >
        <NavLink className={({ isActive }) => isActive ? 'App-link font-bold' : 'App-link  font-thin'} 
          to="/playlists">Playlists</NavLink >
        <NavLink className={({ isActive }) => isActive ? 'App-link font-bold' : 'App-link  font-thin'} 
          to="/songs">Songs</NavLink >
      </header>
    </div>
    </>
    )
}

export default Navigation;
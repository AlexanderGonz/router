import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import './NavLink.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h1>Home Switch</h1>
)
const Media = () => (
  <h1>Media</h1>
)
const Playlist = () => (
  <h1>Playlist </h1>
)

const App = () => {

  return(
    <BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Switch>
        {/* Switch renderiza la prima ruta que coincide */}
        <Route path='/' exact render={Home} />
        <Route path='/switch' exact render={Media} /> 
        <Route path='/switch' exact render={Playlist} />
      </Switch>
    </BrowserRouter>
  )  
}

export default App
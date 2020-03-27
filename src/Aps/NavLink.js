import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './NavLink.css'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = (props) => (
  <h1>Home NavLink</h1>
)

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const navActive = {
  color: 'orangered'
}

const Navigation = () => (
  <nav style={navStyles}>
    <NavLink 
      to='/' 
      exact // Para que se muestren los estilos solo cuando sea el path exacto
      activeStyle={navActive} // Podemos agregar estilos en linea cuando esta activo
    >
      Home 
    </NavLink>
    <NavLink 
      to='/hola' 
      replace // Reemplaza en el historial la anterior ruta por esta misma. Practicamnete borra del historial la ruta anterior
      activeClassName='navActive' // Podemos agregar estilos css cuando esta activo
    >
      Hola 
    </NavLink>
    <NavLink 
      to='/productos' 
      activeStyle={navActive}
      isActive={(match, location) => { //Logica para mostrar el link activo o no 
        console.log(match);
        if (!match) return false

        return !match.isExact
      }}
    >
      Productos 
    </NavLink>
  </nav>
)

const App = () => {
  
  return (
    <BrowserRouter className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Navigation />
      <Route path='/' exact component={Home} /> 
      <Route path='/hola' render={Hola} /> 
      <Route path='/productos/:id?' render={Productos} /> 
    </BrowserRouter>
  );
}


export default App;

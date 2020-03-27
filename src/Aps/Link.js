import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = (props) => {
  console.log(props);
  return (
    <h1>Home link</h1>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Navigation = () => (
  <nav style={navStyles}>
    <Link to={{
      // Estas props llegan a las props.location del componente que renderiza el Route 
      pathname: '/',
      search: '?ordenar=nombre',
      hash: '#hash-otro',
      state: { 
        name: 'Alexander Gonzalez',
        age: 24
      }
    }} >Home </Link>
    <Link to='/hola'>Hola </Link>
    <Link to='/productos' replace>Productos </Link>
  </nav>
)

const App = () => {
  
  return (
    <BrowserRouter className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Navigation />
      <Route path='/' exact component={Home} /> 
      <Route path='/hola' render={Hola} /> 
      <Route path='/productos' render={Productos} /> 
    </BrowserRouter>
  );
}


export default App;

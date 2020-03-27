import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <h1>Productos</h1>
)
const Home = () => (
  <h1>Home</h1>
)


const App = () => {
  
  return (
    <BrowserRouter className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Route path='/' exact component={Home} /> 
      <Route path='/hola' render={Hola} /> 
      <Route path='/productos' render={Productos} /> 
    </BrowserRouter>
  );
}


export default App;

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
const HolaAlex = () => (
  <h1>Hola Alexander</h1>
)

const App = () => {
  
  return (
    <BrowserRouter className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Route 
          path='/' 
          exact
          component={() => (<Home />)} 
          // component usa React.CreateElement(). cada vez que se genere un renderizado se ejecuta la arrow function
          // React recoienda usar render cuando se usa arrow function
        /> 
        <Route 
          path='/hola' 
          exact
          render={Hola} 
        /> 
        <Route path='/productos'
          // Pasar el componente como children
          // Tambien podemos pasar una arrow function que devuelva el marcado
          // Al pasar por children siempre se va a querer renderizar. Match es una prop
        > 
          {({ match }) => {
            if (!match) return (
              <h1>
                *** Woops, no coincide con /productos
              </h1>
            )
            return (
              <Productos />
            )
          }}
          
        </Route> 

        <Route 
          path='/hola/Alexander/' 
          strict // Renderiza si es estrictamente igual al path, ojo con el / final
          sensitive // El path es sensible a mayusculas y minisculas
          component={HolaAlex} 
        /> 

    </BrowserRouter>
  );
}


export default App;

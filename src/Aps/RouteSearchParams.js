import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import './NavLink.css'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
// npm i query-string
import queryString from 'query-string'

const Hola = () => (
  <h1>Hola</h1>
)
const Productos = () => (
  <div >
    <h1>Productos</h1> 
    <div style={navStyles}>
      {/*Estos links dirigen a una misma ruta dinamica enviando valores diferentes */}
      <Link to='/productos/gamers'>Gamers</Link>
      <Link to='/productos/hogar'>Hogar</Link>
    </div>

  </div>
)
const Home = () => (
  <h1>Home Route pasar informacion con params </h1>
)

const ProductosCategoria = ({ match }) => {
  console.log({ match });
  
  return (
    <div>
      <h1>Categoria: { match.params.categoria }</h1>
    </div>
  )
}

const Ropa = ({ location }) => {
  console.log(location);

  // Aqui recogemos los datos de los parametros. 
  // Es un constructor que nos devuelve una interfaz  
  // const query = new URLSearchParams(location.search) 
  // const color  = query.get('color')
  // const talla  = query.get('talla')

  // Devuelve un Objeto
  const { color, talla, sexo } = queryString.parse(location.search)


  return (
    <div>
      <h1>Ropa</h1>
      <div>
        Color: { color }
      </div>
      <div>
        Talla: { talla }
      </div>
      <div>
        Sexo: { sexo }
      </div>
    </div>
  )
}

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
      activeClassName='navActive' // Podemos agregar estilos css cuando esta activo
    >
      Hola 
    </NavLink>
    <NavLink 
      to='/productos' 
      activeStyle={navActive}
    >
      Productos 
    </NavLink>
    <NavLink 
      to='/ropa' 
      activeStyle={navActive}
    >
      Ropa 
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
      <Route path='/productos/' exact render={Productos} /> 
      {/* Ruta dinamica, categoria es required pero id es optional */}
      <Route path='/productos/:categoria/:id?' render={ProductosCategoria} />
      <Route path='/ropa' render={Ropa} /> 
    </BrowserRouter>
  );
}


export default App;

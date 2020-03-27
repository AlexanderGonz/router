import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import './NavLink.css'
import { BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom'

const Home = () => (
  <h1>Home Navegacion Imperativa </h1>
)

const Videos = () => (
  <h1>Videos</h1>
)

const isAuth = false //Falsa autorizazon para la ejemplificacion

const Alexander = () => (
  <h1>Alexander</h1>
)

const Navigation = () => (
  <nav className='navStyles'>
    <NavLink 
      to='/' 
      exact 
      activeClassName='navActive' 
    >
      Home 
    </NavLink>
    <NavLink 
      to='/videos' 
      activeClassName='navActive' 
    >
      Videos 
    </NavLink>
    <NavLink 
      to='/alexander' 
      activeClassName='navActive' 
    >
      Alexander 
    </NavLink>

  </nav>
)

const NavegacionImperativa = ({ history }) =>{
  /* Programacion declarativa: indincar los pasos que se van a seguir 
     Programacion imperativa: forzar manualmente el proceso de esos cmabios
  */
  console.log(history);
  
  return (
    <div>
      <button onClick={history.goBack}>
        Atras
      </button>
      <button onClick={history.goForward}>
        Adelante
      </button>
      <button onClick={() => { //Lo envolvemos en una arrow function para que no se ejecute automaticamente, solo al hacer click
        history.go(-2)
      }}>
        Go 2
      </button>
      <button onClick={() => {
        history.push('/ninja') //Agregamos esta ruta al array del historial
      }}>
        Go Ninja
      </button>
      <button onClick={() => {
        history.replace('/ninjaREplace') //Reemplazaos la ruta actual por la indicada en el array del historial
      }}>
        Go Ninja replace
      </button>
    </div>
  )
}

const App = () => {

  return(
    <BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Navigation />
      {/* Al no pasar path esta ruta siempre se renderiza. Ademas pasa las props [match, location, hisory al componente*/}
      <Route render ={NavegacionImperativa} /> 
      <Route path='/' exact render={Home} />
      <Route path='/videos' exact render={Videos} /> 
      <Route path='/alexander' exact render={Alexander} />
    </BrowserRouter>
  )  
}

export default App
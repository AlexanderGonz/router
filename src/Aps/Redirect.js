import React from 'react'
import logo from '../logo.svg'
import '../App.css';
import './NavLink.css'
import { BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom'

const Home = () => (
  <h1>Home Redirect</h1>
)

const Login = ({ location }) => { //recibimos props porque en redirect mandamos un objeto
  if (location.state){
    return <h2>{ location.state.message }</h2>
  }
  
  return (
    <h1>Login</h1>
  )
}

const isAuth = false //Falsa autorizazon para la ejemplificacion

const Perfil = () => {
  return isAuth
  ? <h1>Bienvenido a tu Perfil </h1>
  : <Redirect to={{
    pathname: '/login',
    state:{ //Al enviarlo de este modo, este objeto llegara al componente como sus props
      message: 'Deber hacer Login para accedera tu perfil'
    }

  }} />

}

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
      to='/login' 
      activeClassName='navActive' 
    >
      Login 
    </NavLink>
    <NavLink 
      to='/perfil' 
      activeClassName='navActive' 
    >
      Perfil 
    </NavLink>

  </nav>
)

const App = () => {

  return(
    <BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Navigation />
      <Route path='/' exact render={Home} />
      <Route path='/login' exact render={Login} /> 
      <Route path='/perfil' exact render={Perfil} />
      <Redirect from='/p' to='perfil' /> {/* Esto sirve para hacer rutas cortas */}
    </BrowserRouter>
  )  
}

export default App
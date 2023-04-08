import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import {ContextGlobal} from './utils/global.context.jsx';


const Navbar = () => {
  const {state, dispatch} = useContext (ContextGlobal);

  const cambiarTema = () => {
    dispatch({ type: state.bgFlag })
  }


  return (
    <nav>
     <div>
       <ul>
       <li><Link to='/home'>Home</Link></li>   
       <li><Link to='/contact'>Contacto</Link></li>
       <li><Link to='/favs'>favs</Link></li>
       <button className= "button" onClick={cambiarTema}>{state.bgFlag === "claro" ? "🌞" : "🌛"}</button>
       </ul>
      
      </div>
    </nav>
  )
}

export default Navbar
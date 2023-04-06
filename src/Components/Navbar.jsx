import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import {ContextGlobal} from './utils/global.context.jsx';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

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
       <button onClick={cambiarTema}>{state.bgFlag === "claro" ? "💚" : "💛"}</button>
       </ul>
       
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
     <div>
       <ul>
       <li><a><Link to='/home'>Home</Link></a></li>   
       <li><a><Link to='/contact'>Contacto</Link></a></li>
       <li><a><Link to='/favs'>favs</Link></a></li>
       <button className='nav-link'>🌛</button>
       </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      </div>
    </nav>
  )
}

export default Navbar
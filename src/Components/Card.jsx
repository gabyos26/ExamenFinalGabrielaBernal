import { handleRequest } from "msw";
import React, {useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {ContextGlobal} from './utils/global.context.jsx';




const Card = ({ id, name, username }) => {
  const {dispatch} = useContext (ContextGlobal);
  


  const addFav = ()=>{
    dispatch ({
      type: "add_dentista",
      payload:{id, name, username}
    });
    alert('¡Lo agregaste a tus Favoritos!');
  }

  return (
    <div>
    <div className="card" >   
    <Link to={`/dentista/${id}`}>
        <img className="imagen" src="/images/doctor.jpg" alt="dentistas foto"/>
        <p className="texto">{name}</p>
        <p>{username}</p>
        </Link> 
        </div>
        <button 
        onClick={addFav} 
        className="favButton">
        ⭐
        </button>
        
    </div>
   

    
  );
};

export default Card;

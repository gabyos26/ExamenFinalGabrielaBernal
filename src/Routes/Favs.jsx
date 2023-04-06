import React, {useContext} from "react";
import { ContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card.jsx';




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
 const {state} = useContext(ContextGlobal);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
         {state?.map ((x) => (<Card key={x.id} name={x.name} username={x.username} id={x.id}/>))}
      </div>
    </div>
  );
};

export default Favs;

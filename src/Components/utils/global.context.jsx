import { createContext, useReducer } from "react";
import React, {useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();


const getDentistaFromStorage = () => {
  const localData = localStorage.getItem("dentistas");
  return localData ? JSON.parse(localData) : [];
};

const saveDentistasFromStorage = (dentistas) => {
  localStorage.setItem("dentistas", JSON.stringify(dentistas));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_dentista": 
    saveDentistasFromStorage ([...state, action.payload]);
    return [...state, action.payload];


    default: 
    return state;
  }
}




export const GlobalContextProvider = ({ children }) => {
  const [dentistas, setDentistas] = useState ([]);
  const [state, dispatch] = useReducer (reducer, {}, getDentistaFromStorage)

  const getDestinta = async () => {
      try {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setDentistas(data));
      } catch (error) {
        console.error(error)
      }
  
  }

  useEffect(() => {
   getDestinta ();
  }, []);

  return (
    <ContextGlobal.Provider value={{dentistas, state, dispatch}}> 
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextProvider; 
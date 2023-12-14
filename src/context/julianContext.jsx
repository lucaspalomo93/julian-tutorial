import { createContext, useContext, useEffect, useState } from 'react';

export const JulianContext = createContext();

const JulianContextProvider = ({ children }) => {
  const initialList = JSON.parse(localStorage.getItem('julianList'));

  const [lista, setLista] = useState(initialList || []);

  const addItemToList = (item) => {
    const updatedList = [...lista, item];
    setLista(updatedList);
    localStorage.setItem('julianList', JSON.stringify(updatedList));
  };

  useEffect(() => {
    // No actualices el localStorage si la lista está vacía.
    if (lista.length > 0) {
      localStorage.setItem('julianList', JSON.stringify(lista));
    }
  }, [lista]);
  
  return (
    <JulianContext.Provider value={{ lista, addItemToList }}>
      {children}
    </JulianContext.Provider>
  );
};

const useJulianContext = () => {
  return useContext(JulianContext);
};

export { JulianContextProvider, useJulianContext };

import React, { useState } from 'react';
import { useJulianContext } from '../../context/julianContext';

const MyUsers = () => {
  const { lista, addItemToList } = useJulianContext();
  const [text, setText] = useState('');

  function handleClick() {
    addItemToList(text);
  }

  return (
    <div>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Añadir item</button>
      <ul>
        {lista.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyUsers;

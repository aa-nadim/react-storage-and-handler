import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  const total = getTotal(cosmetics);
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>Money needed: {total} </p>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />
      ))}
    </div>
  );
};

export default Cosmetics;

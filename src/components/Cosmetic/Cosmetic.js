import React from 'react';
import {
  addToDb,
  deleteShoppingCart,
  removeFromDb,
} from '../../utilities/fakedb';
//import { addToDb } from '../../utilities/mydb';

import './Cosmetic.css';

const Cosmetic = (props) => {
  //console.log(props.cosmetic);
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  const deleteCart = () => {
    deleteShoppingCart();
  };
  return (
    <div className='product'>
      <h2>Buy this: {name} </h2>
      <p>Only for: ${price}</p>
      <p>
        <small>it has id: {id}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
      <button onClick={() => deleteCart(id)}>Delete</button>
    </div>
  );
};

export default Cosmetic;

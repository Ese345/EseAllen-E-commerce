import React, { useContext } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';
import './CartItems.css';
import remove_icon from '../Assets/remove_icon.png'

const CartItems = ({ item }) => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.name} className='cart-item-image' />
      <div className='cart-item-details'>
        <p>{item.name}</p>
        <p>Quantity: {cartItems[item.id]}</p>
        <p>Price: ₦{item.new_price}</p>
        <p>Total: ₦{cartItems[item.id] * item.new_price}</p>
        <img src={remove_icon} onClick={() => removeFromCart(item.id)} alt="Remove" className='remove-icon'/>
      </div>
      <hr />
    </div>
  );
};

export default CartItems;

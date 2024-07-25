import React, { useContext } from 'react';
import { ShopContext } from '../Contexts/ShopContext';
import CartItems from '../Components/CartItems/CartItems'; // Adjust the import path
import './CSS/Cart.css';

const Cart = () => {
  const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='cart'>
      <h1>Your Cart</h1>
      <div className='cart-items'>
        {all_product.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return <CartItems key={index} item={item} />;
          }
          return null;
        })}
      </div>
      <div className='cart-total'>
        <h2>Total Amount: ₦{getTotalCartAmount()}</h2>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

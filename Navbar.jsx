import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contexts/ShopContext';

import logo from '../Assets/logo.jpeg';
import cart from '../Assets/cart.jpeg';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext); // Use context to get cartItems
  const [menu, setMenu] = useState('shop');

  // Calculate total cart count
  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  return (
    <div className="Navbar">
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartCount()}</div>
      </div>
    </div>
  );
};

export default Navbar;

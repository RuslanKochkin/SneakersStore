import React from 'react'
import { Link } from 'react-router-dom';

import carEmptytImg  from '../asset/img/empty-cart.png'

const CartEmpty = () => {
  return (
<>
<div class="cart cart--empty">
            <h2>Cart is empty <icon>🥴</icon></h2>
            <p>
            Most likely, you haven't ordered anything yet. 
            To place an order, go to the main page.
            </p>
            <img src={carEmptytImg } alt="Empty cart" />
            <Link to="/" class="button button--black">
              <span>Come back</span>
            </Link>
          </div>
</>
  )
}
export default CartEmpty;

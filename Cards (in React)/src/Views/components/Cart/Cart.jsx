import React from 'react';
import style from './Cart.module.scss'

function Cart({ cart, removeItem }) {

  const itemsCart = cart.map(({ price, name, img, id, count }) =>
    <div key={id} className={style.item}>
      <div className={style.item__img}>
        <img width="170" src={img} alt="" />
      </div>
      <div className={style.item__desc}>
        <h2>{name}</h2>
        <span>${price}</span>
        <span>Amount: {count}</span>
        <div className={style.item__actions}>
          <button onClick={() => removeItem(id)} className={style.item__action}>Remove from cart</button>
        </div>
      </div>
    </div>
  )
  return (
    <section className={style.cart}>
      {cart.length === 0 ? <span>No items</span> : itemsCart}
    </section>
  );
}

export default Cart;
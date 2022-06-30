import React from 'react';
import style from './Main.module.scss'

function Main({ cards, addToCart, isMoreInfo, moreInfo }) {

  const cardsItems = cards.map(({ name, id, price, img, desc }) =>
    <div key={id} className={style.item}>
      <div className={style.item__img}>
        <img width="270" src={img} alt="" />
      </div>
      <div className={style.item__mainInfo}>
      <h2>{name}</h2>
      <span>${price}</span>
      </div>
      <div className={isMoreInfo === id ? `${style.item__activeDesc}` : `${style.item__deactiveDesc}`}>
          <p>{desc}</p>
      </div>
      <div className={style.item__actions}>
        <button className={style.item__action} onClick={() => addToCart({name: name, id: id, price: price, img: img})}>Add to cart</button>
        <button onClick={() => {
          if(isMoreInfo === id) id = null
          return moreInfo(id)
        }} className={style.item__action}>+ More info</button>
      </div>
    </div>
  )


  return (
    <section className={style.wrapper}>
      {cardsItems}
    </section>
  );
}

export default Main;
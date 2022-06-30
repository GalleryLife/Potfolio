import React from "react";
import { Link } from "react-router-dom"
import style from './Navigation.module.scss'

function Navigation({ toggle, toggleTab }) {

  return (
    <nav className={style.nav}>
      <Link
        onClick={() => toggleTab(1)}
        className={toggle === 1 ? `${style.checked}` : `${style.off}` }
        to="/"
      >Main</Link>
      <Link
        onClick={() => toggleTab(2)}
        className={toggle === 2 ? `${style.checked}` : `${style.off}` }
        to="/cart">
        Cart</Link>
    </nav>
  )
}

export default Navigation
import React, {useEffect, useLayoutEffect, useState, Suspense} from "react"
import { Route, Routes } from 'react-router-dom';
import Navigation from "../Navigation/Navigation.jsx"
const LazyComponent = React.lazy(() => import('../Main/Main.jsx'))
// import Main from "../Main/Main.jsx";
import Cart from './../Cart/Cart.jsx';
import 'antd/dist/antd.css';
import { Spin } from "antd";
import styles from './App.module.scss'
const axios = require('axios');


function App() {
  const [cards, setCards] = useState([])
  const [toggle, setToggle] = useState(1)
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  })
  const [isMoreInfo, setIsLMoreInfo] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(({ data }) => setCards(data))
      .catch((e) => {
        //Be good UI
        console.log(e)
        alert('Something wrong')
      })
  }, [])
  useLayoutEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = ({ name, id, price, img }) => {
    const index = cart.findIndex(({ name: cartName }) => name === cartName)
    if (index === -1) {
      setCart(previousState => [...previousState, { name, id, price, img, count: 1 }])
    } else {
      console.log(1);
      setCart((previousState) => {
        const copyArray = [...previousState]
        copyArray[index].count = copyArray[index].count + 1
        return copyArray
      })
    }
  }
  const removeItem = (id) => {
    const index = cart.findIndex(({ id: cartId }) => id === cartId)
    if (cart[index].count > 1) {
      setCart((previousState) => {
        const copyArray = [...previousState]
        copyArray[index].count = copyArray[index].count - 1
        return copyArray
      })
    } else {
      console.log(2);
      setCart(previousState => {
        const arr = [...previousState]
        arr.splice(index, 1)
        return arr
      })

    }
  }
  const toggleTab = (index) => {
    setToggle(index)
  }
  const moreInfo = (id = 0) => {
    setIsLMoreInfo(id)
  }

  return (
    <div className={styles.container}>
      <Navigation toggleTab={toggleTab} toggle={toggle} />
        <Suspense fallback={<Spin size="large" tip="Loading.." className={styles.spin}/>}>
      <Routes>
        <Route
          path='/'
          element={<LazyComponent
            cards={cards}
            isMoreInfo={isMoreInfo}
            moreInfo={moreInfo}
            addToCart={addToCart} />} />
        <Route
          exact path='/cart'
          element={
            <Cart cart={cart} removeItem={removeItem} />} />
      </Routes>
        </Suspense>
    </div>
  )
}

export default App;
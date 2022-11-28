import React from 'react'
import CartCard from '../components/Cart/CartCard'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const Cart = ({cartItems , handleAdd , handleDelete ,handleMinus}) => {
  return (
    <>
        <Navbar cartItems={cartItems} />
        <CartCard handleAdd={handleAdd} handleMinus={handleMinus} cartItems={cartItems} handleDelete={handleDelete} />
        <Footer/>
    </>
  )
}

export default Cart
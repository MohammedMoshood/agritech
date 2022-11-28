import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Fruit from '../components/products/Fruit'
import Footer from '../components/Footer/Footer'

const Products = ({handleAdd , cartItems}) => {
  return (
    <>
        <Navbar cartItems={cartItems} />
        <Fruit handleAdd={handleAdd} />
        <Fruit handleAdd={handleAdd} />
        <Footer/>

    </>
  )
}

export default Products
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Fruit from '../components/products/Fruit'
import Footer from '../components/Footer/Footer'
import Livestock from '../components/products/Livestock'

const Products = ({handleAdd , cartItems}) => {
  return (
    <>
        <Navbar cartItems={cartItems} />
        <Fruit handleAdd={handleAdd} />
        <Livestock handleAdd={handleAdd} />
        <Footer/>

    </>
  )
}

export default Products
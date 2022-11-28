import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Home = ({cartItems}) => {
  return (
    <>
    <Navbar cartItems={cartItems} />
    <Hero/>
    <Footer/>
    </>
  )
}

export default Home
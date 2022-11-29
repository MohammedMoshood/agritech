import React from 'react'
import AboutSection from '../components/About/AboutSection'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const About = ({cartItems}) => {
  return (
    <>
        <Navbar cartItems={cartItems} />
        <AboutSection/>
        <Footer/>

    </>
  )
}

export default About
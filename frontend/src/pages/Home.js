import React from 'react'

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Banner />
        <Features />
        <Footer />
    </div>
  )
}

export default Home;
import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About';
import Quality from '../components/Quality';
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Reservation from '../components/Reservation';

const Home = () => {
  return (
    <>

    <HeroSection />
    <About />
    <Quality />
    <WhoAreWe />
    <Team />
    <Reservation />
    <Footer />

    </>
  )
}

export default Home

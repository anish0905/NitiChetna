import React from 'react'
import CarouselImage from './components/CarouselImage/CarouselImage';
import CountDown from './components/CountDown/CountDown';
import Scheme from './components/schemeCategory/Scheme';
import AboutUs from './components/aboutUs/AboutUs';
import DevelopmentGoal from './components/Development Goal/DevelopmentGoal';
import Stories from './components/Stories/Stories';
import Support from './components/Support/Support';
import Navbar from './components/NavBar/Navbar';
import BolgsHome  from './components/Blogs/BlogsHome';
import Footer from './components/Footer/Footer';

const Home = () => {
  return (
    <div>
         <Navbar />
      <CarouselImage />
      <CountDown />
      <Scheme />
      <AboutUs />
      <DevelopmentGoal />
      <Stories />
      <Support />
      <BolgsHome/>
      <Footer/>
    </div>
  )
}

export default Home

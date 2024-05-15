
// import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/NavBar/Navbar';
import './App.css';
import CarouselImage from './components/CarouselImage/CarouselImage';
import CountDown from './components/CountDown/CountDown';

import Scheme from './components/schemeCategory/Scheme';
import AboutUs from './components/aboutUs/AboutUs';
import DevelopmentGoal from './components/Development Goal/DevelopmentGoal';
import Stories from './components/Stories/Stories';
import Support from './components/Support/Support';

function App() {
  return (
    <div>
      {/* <ScrollToTop/> */}
      <Navbar/>
      <CarouselImage/>
      <CountDown/>
      <Scheme/>
      <AboutUs/>
      <DevelopmentGoal/>
      <Stories/>

      <Support/>
     
    </div>
  );
}

export default App;


import Navbar from './components/NavBar/Navbar';
import './App.css';
import CarouselImage from './components/CarouselImage/CarouselImage';
import CountDown from './components/CountDown/CountDown';

import Scheme from './components/schemeCategory/Scheme';

function App() {
  return (
    <div>
      <Navbar/>
      <CarouselImage/>
      <CountDown/>
      <Scheme/>
     
    </div>
  );
}

export default App;

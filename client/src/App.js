
import './App.css';
import Home from './LandingContainer/Home/Home.js';
import Offer from './LandingContainer/Offer/Offer.js'
import Topnav from './LandingContainer/Navbar/Topnav/Topnav.js'

function App() {
  return (
    <div className="App">
      <Topnav />  
      <Home />
      <Offer />
    </div>
  );
}

export default App;

import { Home } from './views/Home';
import './App.css';
import injectContext from "./store/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favorites } from './views/Favorites';
import { CharacterDetail } from './views/CharacterDetail';
import { PlanetDetail } from './views/PlanetDetail';
import { StarshipDetail } from './views/StarshipDetail';
import { VehicleDetail } from './views/VehicleDetail';

function App() {
  return (
    <div className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/character/:uid" element={<CharacterDetail />} />
        <Route path="/planet/:uid" element={<PlanetDetail />} /> 
        <Route path="/starship/:uid" element={<StarshipDetail />} />
        <Route path="/vehicle/:uid" element={<VehicleDetail />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default injectContext(App);

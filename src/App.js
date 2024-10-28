import { Home } from './views/Home';
import './App.css';
import injectContext from "./store/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CharacterDetail } from './views/characterdetail/CharacterDetail';
import { PlanetDetail } from './views/planetdetail/PlanetDetail';
import { StarshipDetail } from './views/starshipdetail/StarshipDetail';
import { VehicleDetail } from './views/vehicledetail/VehicleDetail';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App-header">
      <Router>

        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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

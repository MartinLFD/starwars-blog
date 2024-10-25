import { Home } from './views/Home';
import './App.css';
import injectContext from "./store/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favorites } from './views/Favorites';
import { MoreInfoData } from './views/MoreInfo';


function App() {
  return (
    <div className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/moreinfo" element={<MoreInfoData />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default injectContext(App);

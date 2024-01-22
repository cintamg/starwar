import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navebar from "./Components/Navebar";
import People from "./Components/People";
import Spaceship from "./Components/Spaceship";
import Sidebar from "./Components/Sidebar";
import Vehicle from "./Components/Vechicle";
import Planet from "./Components/Planet";
import Home from "./Components/Home";
import About from "./Components/About";
import './style.css';

function App() {
  return (
    <div className="app">
      <Router>
      <Navebar/>
      <Sidebar/>
      <div className="main-content">
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/spaceship" element={<Spaceship/>}></Route>
          <Route path="/vehicle" element={<Vehicle/>}></Route>
          <Route path="/planet" element={<Planet/>}></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
};

export default App;

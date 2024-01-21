import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navebar from "./Components/Navebar";
import People from "./Components/People";
import Spaceship from "./Components/Spaceship";
import Sidebar from "./Components/Sidebar";
import './style.css';

function App() {
  return (
    <>
    <Router>
    <Navebar/>
    <Sidebar/>
    <Routes>
      <Route path="/people" element={<People/>}></Route>
      <Route path="/spaceship" element={<Spaceship/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;

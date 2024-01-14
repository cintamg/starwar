import './App.css';
import Navebar from './Components/Navebar';
import News from './Components/News';
import NewsApple from './Components/NewsApple';
import NewsTesla from './Components/NewsTesla';
import NewsUS from './Components/NewsUS';
import TechCrunch from './Components/TechCrunch';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navebar/>
      <Routes>
        <Route path="/" element={<News/>}></Route>
        {/* <Route path="/newsapple" element={<NewsApple/>}></Route>
        <Route path="/newstesla" element={<NewsTesla/>}></Route>
        <Route path="/newsus" element={<NewsUS/>}></Route>
        <Route path="/techcrunch" element={<TechCrunch/>}></Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;

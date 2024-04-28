import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Search from './Component/Search';
import AnimeInfo from './Component/AnimeInfo';

function App() {
  return (
    <div className="App">  
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/animeinfo' element={<AnimeInfo/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
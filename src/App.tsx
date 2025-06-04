import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Farms from './pages/Farms';
import FarmDetail from './pages/FarmDetail';
import Map from './pages/Map';
import Funding from './pages/Funding';
import News from './pages/News';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/farms" element={<Farms />} />
            <Route path="/farms/:id" element={<FarmDetail />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/map" element={<Map />} />
            <Route path="/news" element={<News />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

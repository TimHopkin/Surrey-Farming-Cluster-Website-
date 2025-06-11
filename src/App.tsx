import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Farms from './pages/Farms';
import FarmDetail from './pages/FarmDetail';
import Map from './pages/Map';
import Funding from './pages/Funding';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Join from './pages/Join';
import FarmProfile from './pages/FarmProfile';

function App() {
  return (
    <AuthProvider>
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
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/join" element={<Join />} />
              <Route path="/profile" element={<FarmProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

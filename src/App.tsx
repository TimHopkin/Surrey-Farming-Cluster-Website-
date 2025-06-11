import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/OptimizedAuthContext';
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
import FastDashboard from './pages/FastDashboard';
import Test from './pages/Test';
import SystemTest from './pages/SystemTest';
import FastLogin from './pages/FastLogin';
import SimpleProtectedRoute from './components/SimpleProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
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
                <Route path="/profile" element={
                  <SimpleProtectedRoute>
                    <FarmProfile />
                  </SimpleProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <SimpleProtectedRoute>
                    <FastDashboard />
                  </SimpleProtectedRoute>
                } />
                <Route path="/test" element={<Test />} />
                <Route path="/system-test" element={<SystemTest />} />
                <Route path="/login" element={<FastLogin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

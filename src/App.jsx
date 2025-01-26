import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
/*import React from 'react'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Pizza from './pages/Pizza/Pizza';
import Home from './pages/Home/Home'
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Login/RegisterPage';
import Cart from './pages/Cart/Cart';
import Navbar from './views/Navbar'
import Footer from './views/Footer'
import NotFound from './views/NotFound';
import Profile from './views/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

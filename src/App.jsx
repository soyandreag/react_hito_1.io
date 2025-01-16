import './App.css';
/*import React from 'react'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Cart />
      <Footer />
    </>
  )
}

export default App

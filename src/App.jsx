import React from 'react';
import '../src/App.css';
/*import React from 'react'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';

function App() {
  return (
    <div>
      <Navbar />
      {/*<Home /> */}
      {/*<LoginPage />*/}
      <RegisterPage />
      <Footer />
    </div>
  );
}

export default App

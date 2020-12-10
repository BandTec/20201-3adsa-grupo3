import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
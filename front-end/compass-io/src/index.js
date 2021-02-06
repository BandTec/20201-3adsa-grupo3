import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
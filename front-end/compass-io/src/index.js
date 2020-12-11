import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import './global.css'

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <div id="alertArea" className="flex-end mg-r-32 fixed width-90pg"></div>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import NavBar from './NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/dist/collapse.js';
//import Belownavbar from './Belownavbar';
//import Body from './Body';
//import Products from './Products';
//import Home from './Home';
import App from './App';
 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <>
  <React.StrictMode>
  
  <App/>
   
  </React.StrictMode>
  </>
);

 
 
reportWebVitals();

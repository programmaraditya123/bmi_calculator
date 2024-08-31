import React from 'react';
//import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Products from './Products';
import Features from './Features';
import Pricing from './Pricing';
import Nutritionchart from './Nutritionchart';
import Tax from './Tax';
import Agecalculator from './Agecalculator';
import Calculator from './Calculator';
import EMIcalculator from './EMIcalculator';
import LoanCalculator from './LoanCalculator';
import Phcalculator from './Phcalculator';
import Productnavbar from './Productnavbar';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/nutritionchart" element={<Nutritionchart/>}/>
        <Route path='/tax' element={<><Productnavbar/><Tax/></>}/>
        <Route path='/agecalculator' element={<><Productnavbar/><Agecalculator/></>}/>
        <Route path='/calculator' element={<><Productnavbar/><Calculator/></>}/>
        <Route path='/emicalculator' element={<><Productnavbar/><EMIcalculator/></>}/>
        <Route path='/loancalculator' element={<><Productnavbar/><LoanCalculator/></>}/>
        <Route path='/phcalculator' element={<><Productnavbar/><Phcalculator/></>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;

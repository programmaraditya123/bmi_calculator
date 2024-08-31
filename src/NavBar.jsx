import React from "react";
import './NavBar.css';
//import { Route,Switch } from "react-router-dom";
//import Products from "./Products";
import './index.js';
import { NavLink } from "react-router-dom";

function NavBar (){
     return (<>
      

<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#header">BMI Calculator</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active text-primary " style={{marginLeft:"14px",textDecoration:"none"}} aria-current="page" to="/">Home</NavLink>
        <NavLink className="nav-link active text-primary " style={{marginLeft:"14px",textDecoration:"none"}} aria-current="page" to="/product">Products</NavLink>
        <NavLink className="nav-link text-primary " style={{marginLeft:"14px",textDecoration:"none"}} to="/features">Features</NavLink>
        <NavLink className="nav-link text-primary" style={{marginLeft:"14px",textDecoration:"none"}} to="/pricing">Pricing</NavLink>
        <NavLink className="nav-link text-primary" style={{marginLeft:"14px",textDecoration:"none"}} to="nutritionchart">Nutrition Chart</NavLink>
      </div>
    </div>
  </div>
</nav>
      
    </>)
}
export default NavBar;
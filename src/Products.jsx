import React from "react";
import Cards from "./Cards";
import './Cards.css';
//import Productnavbar from "./Productnavbar";
//import './Products.css';
//import tax from './tax.png';
//import './App.css';
//import { NavLink } from "react-router-dom";
import './Products.css';

const Products =()=>{
    return(
        <nav>
         
        <div className="maincrd">
        <div className="crd">
         <Cards
        name="Tax calculator"
        title="Tax calculator calculates your tax paid per  year"
        to="/Tax"
            
            
         />
        </div>
        
        <div className="crd">
        <Cards name="Age Calculator"
            title="calculates your age from birth to today"
            to="/Agecalculator"
        />
        </div>
       
        <div className="crd">
        <Cards name="Calculator"
            title="Calculator uses simple mathematics calculations"
            to="/calculator"
        />
        </div>
        
        <div className="crd">
        <Cards name="EMI calculator"
            title="EMI calculator calculates EMI for your product with its interest applicable on amount" 
            to="/emicalculator"
        />
        </div>
        
        <div className="crd">
        <Cards name="Loan calculator"
            title="Loan calculator calculates calculates the amount of Loan paid after the interest"
            to="/loancalculator"
        />
        </div>
        
        <div className="crd">
        <Cards name="pH Calculator"
            title="pH calculator calculates the Acidic and Basic character of the solution"
            to="/phcalculator"
        />
        </div>
 
        </div>
        </nav>
    )
};
export default Products;
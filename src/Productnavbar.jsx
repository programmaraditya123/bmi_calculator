import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";


const Productnavbar =()=>{
    return(<>
        <nav>
            <ul className="pronav">
                <NavLink to="/Tax" className="deco"><li>Tax Calculator</li></NavLink>
                <NavLink to="/Agecalculator" className="deco"><li>Age Calculator</li></NavLink>
                <NavLink to="/calculator" className="deco"><li>Calculator</li></NavLink>
                <NavLink to="/emicalculator" className="deco"><li>EMI Calculator</li></NavLink>
                <NavLink to="/loancalculator" className="deco"><li>Loan Calculator</li></NavLink>
                <NavLink to="/phcalculator" className="deco"><li>pH Calculator</li></NavLink>
            </ul>
        </nav>
    </>)
};

export default Productnavbar;
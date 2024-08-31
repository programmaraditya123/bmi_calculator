import React from "react";
import Cardpricing from "./Cardpricing";
import './Pricing.css';

const Pricing =()=>{
    return(
      <>
      <h1>Pick Your Perfect Plan</h1>
    <div className="pri">
    
         <Cardpricing
            name="Free"
            title="0$"
            t1="Easily Acessible "
            t2="Low Accuracy"
            t3="Satndard Performance"
            t4="Weekly Backups"
            t5="Free Email"
            t6="Unlimited BandWidth"
             
         />
         <Cardpricing
            name="Pro"
            title="5$"
            t1="Medium Acessible"
            t2="Medium Accuracy"
            t3="Increased Performance(Up to 5x)"
            t4="Daily Backups"
            t5="Free Email"
            t6="Unlimited BandWidth"


         />
         <Cardpricing
            name="Team"
            title="10$"
            t1="Highly Acessible"
            t2="High Accuracy"
            t3="Maximum Performance(Up to 10x)"
            t4="Daily Backups"
            t5="Free Email"
            t6="Unlimited BandWidth"

            />
          
    </div>
    </>)
};

export default Pricing;
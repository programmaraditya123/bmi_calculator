import React from "react";
//import Meter from "./Meter";
import InputFields from "./inputFields";
import Belowbody from "./Belowbody";
import Nutritionchart from "./Nutritionchart";


function Body (){
    return (
        <>

    <div className="grid-container">
        {/* <div className="grid-item"> */}
        <InputFields/>
    </div>

    <Belowbody/>
    <Nutritionchart/>
     
        </>

    )
};

export default Body;
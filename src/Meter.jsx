import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
//import InputFields from "./inputFields";

const Meter  = (props) =>{
    console.log("abcd",props.value)
    return(<div className="grid-item">
    <h2 style={{textAlign:"center"}}>Your BMI is:</h2>
     
    <h1>{props.value}</h1>

    <ReactSpeedometer 
        
        //console.log(props.data)
        value={props.value}
        width={500}
        customSegmentStops={[0,18.5,25,30,35,40]}
        maxValue={40}
        
        
        currentValueText="Body Mass Index"
        customSegmentLabels={[
            {
                text:"UnderWeight",
                position:"INSIDE",
                color:"#555"
            },
            {
                text:"Normal",
                position:"INSIDE",
                color:"#555"
            },
            {
                text:"Overweight",
                position:"INSIDE",
                color:"#555"
            },
            {
                text:"Obesity",
                position:"INSIDE",
                color:"#555"
            },
            {
                text:"At Risk",
                position:"INSIDE",
                color:"#555"
            }
        ]}
    />
    <h1>Best food to your body according to BMI</h1>
    <a href="/Nutritionchart">Nutrition Food</a>
    </div>)
};
export default Meter;
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Meter from "./Meter";
import Nutritionchart from "./Nutritionchart";



function InputFields() {
  const [name, setName] = useState();
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [frm, setfrm] = useState();
  


  const name1 = (event) => {
    setName(event.target.value)
    event.preventDefault()


  };
  const wt = (e) => {
    console.log(e.target.value)
    setweight(e.target.value)
    e.preventDefault()
  };
  const ht = (e) => {
    console.log(e.target.value)
    setheight(e.target.value)
    e.preventDefault()

  };
  const frm1 = (props) => {
    const x = height / 100;
    const result = weight / (x * x);
    const res = result.toFixed(2);
    console.log(res);
    setfrm(res)
    

  };







  return (
    <>
      <div className="inputfld">
        <div className="flds">



          <h2 id="standard-basic" style={{ marginLeft: "-10px", marginBottom: "0px", marginTop: "10px" }}>Hello,{name}</h2><br></br>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <form>

              <TextField id="standard-basic" onChange={name1} value={name} label="Enter Your Name" variant="standard" /><br></br>

              <FormControl>
                <br></br>
                <FormLabel id="demo-row-radio-buttons-group-label standard-basic" style={{ textAlign: "left" }}>Gender</FormLabel>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel id="stanadrd-basic" value="female" control={<Radio />} label="Female" />
                  <FormControlLabel id="stanadrd-basic" value="male" control={<Radio />} label="Male" />


                </RadioGroup>
              </FormControl><br></br>

              <TextField id="standard-basic" label="Enter Your Age" variant="standard" /><br></br>
              <TextField id="standard-basic" value={weight} onChange={wt} label="Enter Your Weight(Kg)" variant="standard" /><br></br>
              <TextField id="standard-basic" value={height} onChange={ht} label="Enter Your Height(cm)" variant="standard" />
              <Button id="standard-basic" variant="outlined" onClick={frm1} style={{ marginTop: "20px" }}>Check</Button>
            </form>
          </Box>
        </div>

        <div className="meter">

          <Meter value={frm} />
        </div>
        {/* <div className="nutchart">
          <Nutritionchart weight={weight} height={height}/>
        </div> */}
      </div>
    </>)
};
export default InputFields;

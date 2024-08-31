// import React from "react";

// const Agecalculator=()=>{
//     return(<>
//     <h1>Calculates your age </h1>
//     <h2>Enter the following Fields:</h2>
//     <div className="age">
//         <div className="ageflds">
//         <form>
//         <label for="dateofbirth">Date of Birth:</label>
//         <input type="date" id="dateofbirth"></input>
//         </form>
//         <form className="custom">
//             <label for="todaysdate" id="todaydate">Today's Date</label>
//             <label for="customdate">Custom Date</label>
//             <input type="date" id="todaysdate"></input>
//         </form>
//         </div>
//     </div>
     
//     </>)
// };
// export default Agecalculator;

import React, { useState } from 'react';
import './Agecalculator.css';

const Agecalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button onClick={calculateAge} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Calculate Age
      </button>
      {age !== null && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <p>Your age is: {age}</p>
        </div>
      )}
    </div>
  );
};

export default Agecalculator;

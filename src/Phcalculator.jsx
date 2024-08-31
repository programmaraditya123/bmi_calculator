import React, { useState } from 'react';
import './Phcalculator.css';

function Phcalculator() {
  const [concentration, setConcentration] = useState('');
  const [ph, setPh] = useState(null);

  const calculatePH = (concentration) => {
    const phValue = -Math.log10(concentration);
    return phValue.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const conc = parseFloat(concentration);

    if (!isNaN(conc) && conc > 0) {
      const calculatedPh = calculatePH(conc);
      setPh(calculatedPh);
    } else {
      setPh('Invalid input');
    }
  };

  return (
    <div className="App">
      <h1>pH Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Concentration of H⁺ ions (mol/L):
            <input
              type="number"
              step="0.0001"
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate pH</button>
      </form>
      {ph !== null && (
        <div className="result">
          <h2>pH Value: {ph}</h2>
        </div>
      )}
    </div>
  );
}

export default Phcalculator;

import React, { useState } from 'react';
import './Tax.css';

function Tax() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = (income) => {
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = 12500 + (income - 500000) * 0.2;
    } else {
      tax = 112500 + (income - 1000000) * 0.3;
    }
    setTax(tax);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomeValue = parseFloat(income);
    if (!isNaN(incomeValue)) {
      calculateTax(incomeValue);
    }
  };

  return (
    <div className="App">
      <h1>India Income Tax Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your annual income:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {tax !== null && (
        <div className="result">
          <h2>Income: ₹{parseFloat(income).toLocaleString('en-IN')}</h2>
          <h2>Tax: ₹{tax.toLocaleString('en-IN')}</h2>
        </div>
      )}
    </div>
  );
}

export default Tax;

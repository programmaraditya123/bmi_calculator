import React, { useState } from 'react';
import './EMIcalculator.css';

function EMIcalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = (principal, rate, tenure) => {
    rate = rate / 12 / 100; // Monthly interest rate
    tenure = tenure * 12; // Total number of months
    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);
    return emi;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const tenure = parseFloat(loanTenure);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(tenure)) {
      const calculatedEmi = calculateEMI(principal, rate, tenure);
      setEmi(calculatedEmi.toFixed(2));
    } else {
      setEmi('Invalid input');
    }
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Loan Amount (₹):
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Annual Interest Rate (%):
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Loan Tenure (Years):
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate EMI</button>
      </form>
      {emi !== null && (
        <div className="result">
          <h2>Monthly EMI: ₹{emi}</h2>
        </div>
      )}
    </div>
  );
}

export default EMIcalculator;

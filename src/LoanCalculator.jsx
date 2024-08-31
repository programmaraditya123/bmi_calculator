import React, { useState } from 'react';
import './LoanCalculator.css';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseInt(term) * 12;

    if (isNaN(principal) || isNaN(annualRate) || isNaN(numberOfPayments)) {
      alert('Please enter valid values');
      return;
    }

    const payment = 
      (principal * monthlyRate) / 
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="loan-calculator">
    <h1>Loan Calculator</h1>
      <form onSubmit={calculatePayment}>
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {monthlyPayment && (
        <div className="result">
          <h2>Monthly Payment:  ₹{monthlyPayment}</h2>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;

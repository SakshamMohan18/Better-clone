import { useState } from "react";
import "../styles/calculator.css";


const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const rate = interestRate / 100 / 12;
    const n = years * 12;
    const payment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -n));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <label>Loan Amount:</label>
      <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      <label>Interest Rate (%):</label>
      <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      <label>Years:</label>
      <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      <button onClick={calculateMortgage}>Calculate</button>
      <h3>Monthly Payment: ${monthlyPayment}</h3>
    </div>
  );
};

export default MortgageCalculator;

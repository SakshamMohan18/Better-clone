import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MortgageCalculator from "../components/MortgageCalculator";

const Calculator = () => {
  return (
    <div>
      <Navbar />
      <h1>Mortgage Calculator</h1>
      <MortgageCalculator />
      <Footer />
    </div>
  );
};

export default Calculator;

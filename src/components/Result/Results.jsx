import { calculateInvestmentResults, formatter } from "../../util/investment";

import "./Results.css";

export default function Results({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((annualResult) => {
          const totalInterest =
            annualResult.valueEndOfYear -
            annualResult.annualInvestment * annualResult.year -
            userInput.initialInvestment;
          const totalInvested = annualResult.valueEndOfYear - totalInterest;
          return (
            <tr key={annualResult.year}>
              <td>{annualResult.year}</td>
              <td>{formatter.format(annualResult.valueEndOfYear)}</td>
              <td>{formatter.format(annualResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

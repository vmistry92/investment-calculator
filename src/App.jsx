import { useState } from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Result/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5.25,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,  //+ symbol converts from string to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results userInput={userInput} />
    </>
  );
}

export default App;

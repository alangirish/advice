import React, { useEffect, useState } from "react";
import AdviceBox from "./components/AdviceBox";
import axios from "axios";

function App() {
  const [advices, setAdvices] = useState(""); 
  const [adviceNumber, setAdviceNumber] = useState(0); 

  async function getAdvice() {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      const data = res.data.slip;
      console.log(data.id);
      setAdvices(data.advice); 
      setAdviceNumber(data.id); 
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-dark_blue h-screen flex items-center justify-center">
      <AdviceBox advice={advices} adviceNumber={adviceNumber} handleClick={getAdvice}/>
    </div>
  );
}

export default App;

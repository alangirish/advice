import React, { useEffect, useState } from "react";
import AdviceBox from "./components/AdviceBox";
import axios from "axios";

function App() {
  const [advices, setAdvices] = useState(""); 
  const [adviceNumber, setAdviceNumber] = useState(0); 
  const [loading, setLoading] = useState(false); 

  async function getAdvice() {
    setLoading(true); 
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      const data = res.data.slip;
      setAdvices(data.advice); 
      setAdviceNumber(data.id); 
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-dark_blue h-screen flex items-center justify-center">
      <AdviceBox advice={advices} adviceNumber={adviceNumber} handleClick={getAdvice} loading={loading} />
    </div>
  );
}

export default App;

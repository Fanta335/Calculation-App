import React, { useState } from "react";

import CalculationBoard from "./CalculationBoard";
import HistroyBoard from "./HistoryBoard";

const Container = () => {
  const [history, setHistory] = useState([]);

  const handleHistory =(input, output)=>{
    setHistory(history.concat(input + ' = ' + output));
  }

  return (
    <>
      <CalculationBoard handleHistory={handleHistory} />
      <HistroyBoard history={history} />
    </>
  );
};

export default Container;

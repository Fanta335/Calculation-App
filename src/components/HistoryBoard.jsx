import React from "react";

const HistroyBoard = (props) => {
  const { history } = props;

  const results = history.map((result, index) => {
    return <li key={index}>{result}</li>;
  });

  return (
    <div>
      <h2>Calculation history</h2>
      <ul>{results}</ul>
    </div>
  );
};

export default HistroyBoard;

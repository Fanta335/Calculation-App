import React from "react";

const HistroyBoard = (props) => {
  const { history } = props;

  const results = history.map((result, index) => {
    return <li key={index}>{result}</li>;
  });

  return (
    <div>
      <p>Calculation history</p>
      <ul>{results}</ul>
    </div>
  );
};

export default HistroyBoard;

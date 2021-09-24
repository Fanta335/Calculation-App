import React from "react";

const InputDisplay = (props) => {
  const { numsInput } = props;
  let numsToDisplay = "";
  const operators = ["+", "-", "*", "/", "%"];
  numsInput.split('').forEach((val) => {
    if (operators.indexOf(val) !== -1) {
      numsToDisplay += " " + val + " ";
    } else {
      numsToDisplay += val;
    }
  });

  return (
    <div style={{ backgroundColor: "green" }}>
      <div style={{ width: "100%" }}>
        <div>{numsInput === "" ? "0" : numsToDisplay}</div>
      </div>
    </div>
  );
};

export default InputDisplay;

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
    <div>
      <div style={{textAlign: "right"}}>
        <div>{numsInput === "" ? "0" : numsToDisplay}</div>
      </div>
    </div>
  );
};

export default InputDisplay;

import React from "react";

const InputDisplay = (props) => {
  const { textInput } = props;
  let TextToDisplay = "";
  const operators = ["+", "-", "×", "÷", "%"];
  textInput.split('').forEach((val) => {
    if (operators.indexOf(val) !== -1) {
      TextToDisplay += " " + val + " ";
    } else {
      TextToDisplay += val;
    }
  });

  return (
    <div>
      <div style={{textAlign: "right"}}>
        <div>{textInput === "" ? "0" : TextToDisplay}</div>
      </div>
    </div>
  );
};

export default InputDisplay;

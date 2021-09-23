import React from "react";

const InputDisplay = (props) => {
  const { numsInput } = props;
  return (
    <div style={{ backgroundColor: "green" }}>
      <div style={{ width: "100%" }}>
        <div>{numsInput[0] === "" ? "0" : numsInput}</div>
      </div>
    </div>
  );
};

export default InputDisplay;

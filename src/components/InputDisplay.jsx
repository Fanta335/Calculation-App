import React from "react";

const InputDisplay = (props) => {
  const {numsInput} = props;
  return (
    <div style={{ backgroundColor: "green" }}>
      <input value={numsInput} type="text" style={{width: "100%"}}/>
    </div>
  );
};

export default InputDisplay;

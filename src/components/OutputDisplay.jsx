import React from "react";

const OutputDisplay = (props) => {
  const { numsOutput } = props;
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <div style={{ width: "100%" }}>
        <div>{numsOutput === "" ? "0" : numsOutput}</div>
      </div>
    </div>
  );
};

export default OutputDisplay;

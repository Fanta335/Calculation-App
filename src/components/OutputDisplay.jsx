import React from "react";

const OutputDisplay = (props) => {
  const { numsOutput } = props;
  return (
    <div>
      <div style={{textAlign: "right", fontSize: '2rem'}}>
        <div>{numsOutput === "" ? "0" : numsOutput}</div>
      </div>
    </div>
  );
};

export default OutputDisplay;

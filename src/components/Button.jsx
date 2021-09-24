import React, { useCallback, useState } from "react";

const Button = (props) => {
  const { val, text, size, onClickInput, onClickOutput, onClickClear, onClickDelete } = props;
  const [isDown, setDown] = useState(false);
  const handlePressDown = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressUp = useCallback(() => {
    setDown(false);
  }, [setDown]);
  const buttonColorStyle = isDown ? "linear-gradient(145deg, #7fb2da, #97d4ff)" : "linear-gradient(145deg, #97d4ff, #7fb2da)";
  const buttonSizeStyle = size === "wide" ? "205px" : "60px";
  const buttonStyle = {
    borderRadius: "15px",
    background: buttonColorStyle,
    boxShadow: "6px 6px 12px #78a8ce, -6px -6px 12px #a2e4ff",
    height: "60px",
    width: buttonSizeStyle,
    border: "rgba(141,198,242,.3)",
    fontSize: "2rem",
  };

  let onClickFunction;
  if(onClickInput !== undefined) onClickFunction = onClickInput;
  else if(onClickOutput !== undefined) onClickFunction = onClickOutput;
  else if(onClickClear !== undefined) onClickFunction = onClickClear;
  else onClickFunction = onClickDelete;

  return (
    <button data-val={val} style={buttonStyle} onMouseDown={handlePressDown} onMouseUp={handlePressUp} onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;

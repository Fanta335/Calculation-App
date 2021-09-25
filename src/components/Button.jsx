import React, { useCallback, useState } from "react";

const Button = (props) => {
  const { val, text, size, onClickInput, onClickOutput, onClickClear, onClickDelete, isOperator } = props;
  const [isDown, setDown] = useState(false);
  const handlePressDown = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressUp = useCallback(() => {
    setDown(false);
  }, [setDown]);
  const buttonBackgroundStyle = isOperator ? "#1b20a7" : "#8ad8ff";
  const buttonFontColorStyle = isOperator ? "white" : "black";
  const buttonShadowStyle = isDown ? "inset 7px 7px 13px #75b8d9, inset -7px -7px 13px #9ff8ff" : "7px 7px 13px #75b8d9, -7px -7px 13px #9ff8ff";
  const buttonSizeStyle = size === "wide" ? "202px" : "60px";
  const buttonStyle = {
    borderRadius: "15px",
    background: buttonBackgroundStyle,
    boxShadow: buttonShadowStyle,
    height: "60px",
    width: buttonSizeStyle,
    border: "rgba(141,198,242,.3)",
    fontSize: "2rem",
    color: buttonFontColorStyle,
    fontFamily: "Baloo",
  };

  let onClickFunction;
  if (onClickInput !== undefined) onClickFunction = onClickInput;
  else if (onClickOutput !== undefined) onClickFunction = onClickOutput;
  else if (onClickClear !== undefined) onClickFunction = onClickClear;
  else onClickFunction = onClickDelete;

  return (
    <button data-val={val} style={buttonStyle} onMouseDown={handlePressDown} onMouseUp={handlePressUp} onClick={onClickFunction}>
      {text}
    </button>
  );
};

export default Button;

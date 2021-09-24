import { Card, Grid } from "@mui/material";
import React, { useState } from "react";

import ButtonArea from "./ButtonArea";
import DisplayArea from "./DisplayArea";
import expressionParser from "../utils/parser";

const CalculationBoard = (props) => {
  const { handleHistory } = props;

  const [numsInput, setInputNums] = useState("");
  const [numsOutput, setOutputNums] = useState("");

  const handleInput = (event) => {
    const val = event.target.dataset.val;

    if (isNaN(val) && isNaN(numsInput[numsInput.length - 1])) {
      const newNumsInput = numsInput.substring(0, numsInput.length - 1);
      setInputNums(newNumsInput + val);
      return;
    }

    setInputNums(numsInput + val);
  };

  const handleOutput = () => {
    const answer = expressionParser(numsInput);
    setOutputNums(answer);
    handleHistory(numsInput, answer);
  };

  const handleClear = () => {
    setInputNums("");
    setOutputNums("");
  };

  const handleDelete = () => {
    const newNumsInput = numsInput.substring(0, numsInput.length - 1);
    setInputNums(newNumsInput);
  };

  return (
    <Card sx={{ backgroundColor: "gray", width: "300px" }}>
      <Grid container style={{ width: "95%" }}>
        <Grid item>
          <DisplayArea numsInput={numsInput} numsOutput={numsOutput} />
        </Grid>
        <Grid item>
          <ButtonArea onClickInput={handleInput} onClickOutput={handleOutput} onClickClear={handleClear} onClickDelete={handleDelete} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CalculationBoard;

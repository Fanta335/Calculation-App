import { Card, Grid } from "@mui/material";
import React, { useState } from "react";

import ButtonArea from "./ButtonArea";
import DisplayArea from "./DisplayArea";
// import expressionParser from "../utils/parser";

const Container = () => {
  const [numsInput, setInputNums] = useState([""]);
  const [numsOutput, setOutputNums] = useState([""]);

  const handleInput = (event) => {
    setInputNums(numsInput + event.target.dataset.val);
  };

  const handleOutput = () => {
    let answer = numsInput;
    setOutputNums(answer);
  };

  const handleClear = () => {
    setInputNums([""]);
    setOutputNums([""]);
  };

  return (
    <Card sx={{ backgroundColor: "gray", width: "300px" }}>
      <Grid container style={{ width: "95%" }}>
        <Grid item>
          <DisplayArea numsInput={numsInput} numsOutput={numsOutput} />
        </Grid>
        <Grid item>
          <ButtonArea onClickInput={handleInput} onClickOutput={handleOutput} onClickClear={handleClear} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Container;

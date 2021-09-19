import { Card, Grid } from "@mui/material";
import React, { useState } from "react";

import ButtonArea from "./ButtonArea";
import DisplayArea from "./DisplayArea";
// import expressionParser from "../utils/parser";

const Container = () => {
  const [numsInput, setInputNums] = useState([]);
  const [numsOutput, setOutputNums] = useState([]);

  const handleInput = (event) => {
    setInputNums(numsInput + event.target.dataset.val);
  };

  const handleOutput = (event) => {
    setOutputNums(event.target.dataset.val);
  };

  return (
    <Card sx={{ backgroundColor: "gray", width: "300px" }}>
      <Grid container style={{ width: "95%" }}>
        <Grid item>
          <DisplayArea numsInput={numsInput} numsOutput={numsOutput} />
        </Grid>
        <Grid item>
          <ButtonArea onClickInput={handleInput} onClickOutput={handleOutput} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Container;

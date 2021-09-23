import { Grid } from "@mui/material";
import React from "react";

import Button from "./Button";

const ButtonArea = (props) => {
  const { onClickInput, onClickOutput, onClickClear } = props;

  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid container spacing={2}>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"clear"} text={"AC"} onClickClear={onClickClear} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"plusMinus"} text={"+/-"} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"%"} text={"%"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"/"} text={"÷"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"7"} text={"7"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"8"} text={"8"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"9"} text={"9"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"*"} text={"×"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"4"} text={"4"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"5"} text={"5"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"6"} text={"6"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"-"} text={"-"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"1"} text={"1"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"2"} text={"2"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"3"} text={"3"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"+"} text={"+"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Button val={"0"} text={"0"} size={"wide"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"."} text={"."} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"="} text={"="} onClickOutput={onClickOutput} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonArea;

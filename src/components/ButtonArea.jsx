import { Grid } from "@mui/material";
import React from "react";

import Button from "./Button";

const ButtonArea = (props) => {
  const { onClickInput, onClickOutput } = props;

  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid container spacing={2}>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"AC"} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"+/-"} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"%"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"/"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"7"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"8"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"9"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"×"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"4"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"5"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"6"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"-"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Button val={"1"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"2"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"3"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"+"} onClickInput={onClickInput} />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Button val={"0"} size={"wide"} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"."} onClickInput={onClickInput} />
          </Grid>
          <Grid item xs={3}>
            <Button val={"="} onClickOutput={onClickOutput} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonArea;

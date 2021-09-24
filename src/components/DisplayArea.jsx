import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import InputDisplay from "./InputDisplay";
import OutputDisplay from "./OutputDisplay";

const DisplayArea = (props) => {
  const { textInput, numsOutput } = props;
  return (
    <Box
      style={{
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
        marginBottom: '1.5rem',
        padding: '1rem',
        borderRadius: "0.25rem",
        boxShadow: "7px 7px 13px #75b8d9, -7px -7px 13px #9ff8ff",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputDisplay textInput={textInput} />
        </Grid>
        <Grid item xs={12}>
          <OutputDisplay numsOutput={numsOutput} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DisplayArea;

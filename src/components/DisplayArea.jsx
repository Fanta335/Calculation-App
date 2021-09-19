import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import InputDisplay from "./InputDisplay";
import OutputDisplay from "./OutputDisplay";

const DisplayArea = (props) => {
  const { numsInput, numsOutput } = props;
  return (
    <Box sx={{ backgroundColor: "orange", pb: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputDisplay numsInput={numsInput} />
        </Grid>
        <Grid item xs={12}>
          <OutputDisplay numsOutput={numsOutput} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DisplayArea;

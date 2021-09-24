import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import CalculationBoard from "./CalculationBoard";
import HistroyBoard from "./HistoryBoard";

const Container = () => {
  const [history, setHistory] = useState([]);

  const handleHistory = (input, output) => {
    setHistory(history.concat(input + " = " + output));
  };

  return (
    <Box>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{p: 3}}>
        <CalculationBoard handleHistory={handleHistory} />
        <HistroyBoard history={history} />
      </Grid>
    </Box>
  );
};

export default Container;

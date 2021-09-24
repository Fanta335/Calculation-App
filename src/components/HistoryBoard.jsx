import { Card } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HistroyBoard = (props) => {
  const { history } = props;

  const results = history.map((result, index) => {
    return <li key={index}>{result}</li>;
  });

  return (
    <Card sx={{p:2}}>
      <h2>Calculation history</h2>
      <Box sx={{ width: "300px", height: "300px", overflow: "auto" }}>
        <ul>{results}</ul>
      </Box>
    </Card>
  );
};

export default HistroyBoard;

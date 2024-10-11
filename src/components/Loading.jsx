import { Box } from "@mui/material";
import React from "react";
import loading from "../assets/images/loading.gif";

export default function Loading() {
  return (
    <Box
      sx={{
        maxWidth: "200px",
        margin: "60px auto 0",
      }}
    >
      <Box component="img" src={loading} sx={{ width: "100%" }} />
    </Box>
  );
}

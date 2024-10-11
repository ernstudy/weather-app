import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const year = new Date().getFullYear();

export default function CopyRight() {
  return (
    <Box
      component="footer"
      sx={{ width: "100%", textAlign: "center", mt: "10px" }}
    >
      <Typography component="p">
        <Copyright sx={{ verticalAlign: "middle" }} /> {year} | Developed By
        <Typography
          component="a"
          variant="p"
          href="https://ernstudy.com"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            ml: "4px",
          }}
        >
          Ernstudy
        </Typography>
      </Typography>
    </Box>
  );
}

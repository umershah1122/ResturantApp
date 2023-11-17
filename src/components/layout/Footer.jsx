import { Box, Typography } from "@mui/material";
import { Instagram, Twitter, GitHub, YouTube } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", color: "white", bgcolor: "#1A1A19", p: 2 }}>
      <Box
        sx={{
          my: 1,
          "& svg": {
            fontSize: "40px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateY(-5px)",
            transition: "all 500ms",
          },
        }}
      >
        <Instagram />
        <Twitter />
        <GitHub />
        <YouTube />
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All Rights reserved &copy; to Umer Resturant
      </Typography>
    </Box>
  );
};

export default Footer;

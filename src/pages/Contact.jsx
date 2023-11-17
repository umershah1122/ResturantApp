import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Call, Email, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          m: 5,
          ml: 10,
          textAlign: "center",
          "& h4": { mb: 2, fontWeight: "bold" },
          "& h6": { fontSize: "1rem", textAlign: "justify" },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui
          deserunt quidem sed error libero consectetur ab repudiandae
          reiciendis? Eligendi quia cumque, veniam in tenetur nesciunt laborum
          minus asperiores aliquid animi harum iure, magnam placeat eos dicta,
          qui at officiis dolorem! Atque eius dolor ut placeat alias id
          recusandae libero dolorem soluta vero aspernatur ratione delectus,
          laudantium quasi animi laborum consequuntur incidunt iste.
        </Typography>
      </Box>
      <Box
        sx={{
          m: 5,
          ml: 10,
          width: "600px",
          "@media (max-width:600px)": { width: "300px", m: 5 },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ bgcolor: "black", color: "white", fontSize: "1.5rem" }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ pt: 1, color: "blue" }} />
                  009251772172 (toolfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Email sx={{ pt: 1, color: "goldenrod" }} />{" "}
                  umerresturant@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Call sx={{ pt: 1 }} /> 03319647330
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

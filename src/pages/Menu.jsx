import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { menuList } from "./../data/data";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          m: 2,
          justifyContent: "center",
        }}
      >
        {menuList.map((menu) => (
          <Card sx={{ maxWidth: "320px", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "320px" }}
                src={menu.image}
                alt={menu.name}
                component={"img"}
              />
              <CardContent>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  gutterBottom
                  component={"div"}
                >
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.desc}</Typography>
                <Typography sx={{ fontWeight: "600" }} variant="subtitle1">
                  Price: {menu.price}pkr
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;

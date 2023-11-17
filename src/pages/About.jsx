import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 2,
          "& h4": {
            mb: 5,
            fontWeight: "bold",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1.3rem",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.7rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          explicabo id quibusdam est beatae voluptatum placeat, dolorem
          aspernatur, quaerat accusamus incidunt amet reiciendis, eveniet non
          alias tempora voluptate? Nesciunt, officia libero ea maxime amet autem
          aliquid consequuntur impedit totam magni laborum veritatis porro quam
          doloremque molestias. Accusamus aliquid iusto et labore voluptatibus
          distinctio, aliquam officia minima aut dolore dignissimos quaerat odio
          quo vero quia! Similique iure soluta, aspernatur possimus obcaecati
          ratione amet dolore? Reiciendis quidem dicta rerum natus tenetur animi
          facere cupiditate rem minima quisquam cum vel, assumenda asperiores
          provident culpa aut recusandae atque laboriosam quaerat, doloribus
          necessitatibus enim dolores.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          ipsum deleniti perspiciatis tempore qui nostrum mollitia repudiandae
          cupiditate illum, magni beatae, eum nisi voluptatem, consequuntur ex
          quae odio? Soluta esse ea pariatur temporibus ad nostrum veritatis
          nihil ex libero sit eos in nam quidem aliquam neque consequuntur,
          officia reprehenderit aperiam vitae cumque veniam non! Eos error sint
          nobis neque, delectus, iusto totam molestias velit eligendi earum
          laudantium eius laborum quo deleniti illum, asperiores minus. Quos
          consequuntur deserunt facere modi laboriosam quis. Rem sit, tempore
          ipsam maiores delectus.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

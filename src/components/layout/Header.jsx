import React, { useState } from "react";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import MenuIcon from "@mui/icons-material/Menu";
import Banner from "../../images/banner.jpeg";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerHandler = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={drawerHandler} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "cursive" }}
      >
        <OutdoorGrillIcon />
        Umer Resturant
      </Typography>
      <Divider />
      <ul className="mobile-menu" style={{ backgroundImage: `${Banner}` }}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton>
            <MenuIcon
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, color: "white", display: { sm: "none" } }}
              onClick={drawerHandler}
            />
          </IconButton>
          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontFamily: "cursive" }}
          >
            <OutdoorGrillIcon />
            Umer Resturant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={drawerHandler}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;

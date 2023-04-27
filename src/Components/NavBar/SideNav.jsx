import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import "./SideNav.css";
import { ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export default function () {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="sideNav"
    >
      <Box>
        <img
          src="./assets/Font.png"
          alt=""
          width="150px"
          style={{ margin: "40px" }}
        />

        <List sx={{ color: "white" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/">HOME</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/services">SERVICES</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/about-us">ABOUT US</NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/contact-us">CONTACT US</NavLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <button className="sideNav-btn">Lets Talk</button>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} id="MenuBtn">
            <MenuIcon sx={{ color: "#DAFC01" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Badge,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import WbShadeRoundedIcon from "@mui/icons-material/WbShadeRounded";
import { useState } from "react";
import { Box } from "@mui/system";
import Drawercomp from "./Drawercomp";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

function Navbar({ links }) {
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value, setValue] = useState();

  const user = {
    img: "https://images.unsplash.com/photo-1633534814099-685f19197c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    alt: "avetar",
    name: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(149,157,162,1) 0%, rgba(95,100,157,1) 0%, rgba(5,4,34,1) 0%)",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <WbShadeRoundedIcon />
          DOMESTICHUB
        </Typography>
        <nav>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {links.map((link, index) => (
              <Tab
                key={index}
                label={link.name}
                onClick={() => navigate(link.route)}
              />
            ))}
          </Tabs>
        </nav>

        <IconButton
          sx={{ marginLeft: "auto" }}
          aria-label={notificationsLabel(10)}
        >
          <Badge badgeContent={100} color="secondary">
            <MailIcon color="primary" />
          </Badge>
        </IconButton>

        {user && (
          <Avatar sx={{ bgcolor: "black", marginLeft: 2, marginRight: 2 }}>
            {user.img ? <img src={user.img} /> : <PersonIcon />}
          </Avatar>
        )}
        {user ? (
          <Button
            sx={{
              marginLeft: "auto",
              color: "white",
              "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
            }}
            variant="outlined"
            href="/"
            onClick={() => console.log("LOGOUT")}
          >
            LOGOUT
          </Button>
        ) : (
          <Button
            sx={{
              marginLeft: 2,
              marginRight: 2,
              color: "white",
              "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
            }}
            variant="outlined"
            href="/login"
            onClick={() => console.log("LOGIN")}
          >
            LOGIN
          </Button>
        )}

        {user === null && (
          <Button
            sx={{
              marginLeft: 2,
              color: "white",
              "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
              marginRight: 2,
            }}
            variant="outlined"
          >
            SIGNUP
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

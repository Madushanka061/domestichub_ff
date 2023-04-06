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
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,84,1) 51%, rgba(46,161,142,1) 100%)",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography sx={{ marginLeft: "left" }}>
              <WbShadeRoundedIcon />
            </Typography>
            <Typography sx={{ fontSize: 12 }}>DOMESTICHUB</Typography>
            <Drawercomp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography sx={{ marginLeft: 4 }}>
                <WbShadeRoundedIcon />
              </Typography>
              <Typography sx={{ fontSize: 12 }}>DOMESTICHUB</Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <IconButton
                  sx={{ marginLeft: "auto" }}
                  aria-label={notificationsLabel(10)}
                >
                  <Badge badgeContent={100} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>

                {user && (
                  <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: "black", marginLeft: 2 }}>
                      {user.img ? <img src={user.img} /> : <PersonIcon />}
                    </Avatar>
                  </Stack>
                )}
                {user ? (
                  <Button
                    sx={{
                      marginLeft: "auto",
                      color: "blue",
                      "&:hover": { backgroundColor: "rgba(9,121,84,1)" },
                    }}
                    variant="outlined"
                    onClick={() => console.log("LOGOUT")}
                  >
                    LOGOUT
                  </Button>
                ) : (
                  <Button
                    sx={{
                      marginLeft: "auto",
                      color: "blue",
                      "&:hover": { backgroundColor: "rgba(9,121,84,1)" },
                    }}
                    variant="outlined"
                    onClick={() => console.log("LOGIN")}
                  >
                    LOGIN
                  </Button>
                )}

                {user === null && (
                  <Button
                    sx={{
                      marginLeft: 1,
                      color: "blue",
                      "&:hover": { backgroundColor: "rgba(9,121,84,1)" },
                    }}
                    variant="outlined"
                  >
                    SIGNUP
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

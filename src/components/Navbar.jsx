import React, { useEffect } from "react";
import "../App.css";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Badge,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import WbShadeRoundedIcon from "@mui/icons-material/WbShadeRounded";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const logOut = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const [user, setUser] = useState();
  useEffect(() => {
    const logged = localStorage.getItem("loggedUser");
    if (logged) {
      setUser(JSON.parse(logged));
    } else {
      setUser(null);
      // navigate("/");
    }
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = [
    { name: "Profile", route: "/user-profile" },
    { name: "My Jobs", route: "/my-jobs" },
    { name: "Logout", route: "" },
  ];
  const links = [
    { name: "Post job", route: "/job" },
    { name: "Services", route: "/services" },
    { name: "Contact Us", route: "/contact-us" },
  ];

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
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} on>
          <Link to="/" className="homelink">
            <WbShadeRoundedIcon />
            DOMESTICHUB
          </Link>
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
          <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ bgcolor: "black", marginLeft: 2, marginRight: 2 }}
                >
                  {user.img ? <img src={user.img} /> : <PersonIcon />}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={() => navigate(setting.route)}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
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
            onClick={logOut}
          >
            LOGOUT
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button
                sx={{
                  marginLeft: 2,
                  marginRight: 2,
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
                }}
                variant="outlined"
              >
                LOGIN
              </Button>
            </Link>

            <Button
              sx={{
                marginLeft: 2,
                color: "white",
                "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
                marginRight: 2,
              }}
              variant="outlined"
              href="/sign-up"
            >
              SIGNUP
            </Button>
          </>
        )}

        {/* {user === null && (
          <Button
            sx={{
              marginLeft: 2,
              color: "white",
              "&:hover": { backgroundColor: "rgba(149,157,162,1)" },
              marginRight: 2,
            }}
            variant="outlined"
            href="/sign-up"
          >
            SIGNUP
          </Button>
        )} */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

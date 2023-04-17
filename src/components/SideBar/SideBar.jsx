import {
  Box,
  List,
  MenuList,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import YardIcon from "@mui/icons-material/Yard";
import CountertopsIcon from "@mui/icons-material/Countertops";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SideBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        sx={{
          width: "300px",
          minHeight: "100vh",
          background:
            "linear-gradient(90deg, rgba(149,157,162,1) 0%, rgba(95,100,157,1) 0%, rgba(12,10,69,1) 0%)",
        }}
      >
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: 3,
              height: 40,
              bgcolor: "white",
              width: 240,
            }}
          >
            <Box sx={{ ml: 2, mt: 1 }}>
              <SearchIcon />
            </Box>
            <Box sx={{ mt: -4.8, ml: 3 }}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <MenuList
            component="div"
            variant="outlined"
            size="sm"
            sx={{
              boxShadow: "sm",
              flexGrow: 0,
              minWidth: 200,
              minHeight: "85vh",
              overflow: "auto",
              color: "white",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{}} />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <CountertopsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Services" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Gardening" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="House cleaning" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Odd services" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="House Painting" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Electrician" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Plumbing" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Constructions" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pest Controllers" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Wood Works" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <YardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Vehicle reparing" />
                </ListItemButton>
              </List>
            </Collapse>
          </MenuList>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;

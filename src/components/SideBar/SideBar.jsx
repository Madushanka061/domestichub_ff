import {
  Box,
  List,
  ListItem,
  MenuItem,
  SubMenu,
  MenuList,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import YardIcon from "@mui/icons-material/Yard";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import CountertopsIcon from "@mui/icons-material/Countertops";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
  // const cat = [
  //   {
  //     category: "Household",
  //     items: ["Gardning", "House painting", "Landscaping"],
  //   },
  //   {
  //     category: "Technicians",
  //     items: [
  //       "Electrician",
  //       "CCTV Reparing",
  //       "Plumbing",
  //       "Wood works",
  //       "Ion works",
  //       "TV,Radio reparing",
  //     ],
  //   },
  //   {
  //     category: "Csfdsfsd",
  //     items: ["2dfds", "3sfsd", "4sfsd"],
  //   },
  //   {
  //     category: "Ddsfdsf",
  //     items: ["sdfsd3", "dfsdfds4"],
  //   },
  // ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        sx={{
          width: "300px",
          height: "100vh",
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
              maxHeight: "85vh",
              overflow: "auto",
              color: "white",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="HOME" sx={{}} />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <CountertopsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="HOUSEHOLD SERVICES" />
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
              </List>
            </Collapse>
          </MenuList>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;

import {
  Box,
  List,
  ListItem,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

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
  const cat = [
    {
      category: "Household",
      items: ["Gardning", "House painting", "Landscaping"],
    },
    {
      category: "Technicians",
      items: [
        "Electrician",
        "CCTV Reparing",
        "Plumbing",
        "Wood works",
        "Ion works",
        "TV,Radio reparing",
      ],
    },
    {
      category: "Csfdsfsd",
      items: ["2dfds", "3sfsd", "4sfsd"],
    },
    {
      category: "Ddsfdsf",
      items: ["sdfsd3", "dfsdfds4"],
    },
  ];
  return (
    <Box sx={{ width: "300px", height: "88vh" }}>
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ border: "2px solid #ccc", borderRadius: 1, height: 40 }}>
          <Box sx={{ ml: 2, mt: 1 }}>
            <SearchIcon />
          </Box>
          <Box sx={{ mt: -4.5, ml: 3 }}>
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
          }}
        >
          {cat.map((item, i) => (
            <List key={i}>
              <ListItem sticky>
                <Typography
                  id={`sticky-list-demo-${i}`}
                  level="body3"
                  textTransform="uppercase"
                  fontWeight="lg"
                >
                  {item.category}
                </Typography>
              </ListItem>
              {item.items.map((item, index) => (
                <MenuItem key={index} style={{ marginLeft: 10 }}>
                  {item}
                </MenuItem>
              ))}
            </List>
          ))}
        </MenuList>
      </Box>
    </Box>
  );
};

export default SideBar;

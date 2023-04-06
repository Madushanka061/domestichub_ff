import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

const Drawercomp = ({ links }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "rgba(46,161,142,1)", width: 150 },
        }}
        open={open}
        onClose={() => setopen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setopen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setopen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default Drawercomp;

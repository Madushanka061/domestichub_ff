import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  GlobalStyles,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../Navbar";

function ServiceProfile() {
  const [service, setService] = useState();

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    if (user) {
      setService(JSON.parse(user));
    } else {
      setService(null);
    }
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Navbar />
      <Container>
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "row",
            height: "100vh",
          }}
        >
          <Box marginRight="10px">
            <Avatar
              src={service}
              sx={{ width: 100, height: 100, alignItems: "center" }}
            />
            <Typography variant="h4" marginY="10px">
              {/* {service.providerName} */}
              Madushanka Bandara
            </Typography>
            <Box display="flex" flexDirection="column" marginTop="30px">
              <ListItemButton>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: "black", marginRight: 3 }} />
                  <ListItemText primary="0769224375" sx={{}} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ChatIcon sx={{ color: "black", marginRight: 3 }} />
                  <ListItemText primary="Chat" sx={{}} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: "black", marginRight: 3 }} />
                  <ListItemText primary="Location" sx={{}} />
                </ListItemIcon>
              </ListItemButton>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            display="flex"
            flexDirection="column"
            marginTop="30px"
            marginLeft="50px"
          >
            <Typography variant="h4" sx={{ color: "GrayText" }}>
              Description
            </Typography>
            <Typography variant="h5" sx={{ fontSize: 14, marginTop: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>

            <Typography variant="h4" sx={{ color: "GrayText", marginTop: 3 }}>
              Place your Job
            </Typography>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              onClick={handleClickOpen}
              sx={{ mt: 2, mb: 2 }}
            >
              Place
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Place Job</DialogTitle>
              <DialogContent>
                {/* <DialogContentText>
                  Explain how the Service Should be given
                </DialogContentText> */}
                <TextField
                  margin="normal"
                  id="jobtitle"
                  label="Job Title"
                  name="title"
                  fullWidth
                />
                <TextField
                  maxRows={4}
                  margin="normal"
                  id="description"
                  label="Explain how the Service Should be given"
                  fullWidth
                />
                <TextField
                  margin="normal"
                  id="budget"
                  label="Your budget"
                  name="budget"
                  fullWidth
                />
                <TextField
                  margin="normal"
                  id="location"
                  label="Location"
                  name="location"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Place Job</Button>
              </DialogActions>
            </Dialog>
            <Typography variant="h4" sx={{ marginTop: 3, color: "GrayText" }}>
              Ratings and Reviews
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ServiceProfile;

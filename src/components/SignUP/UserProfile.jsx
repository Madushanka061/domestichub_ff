import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  GlobalStyles,
  TextField,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import Navbar from "../Navbar";
import axios from "axios";

const UserProfile = () => {
  const [userdetail, setuserDetail] = useState();
  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    if (user) {
      setuserDetail(JSON.parse(user));
    } else {
      setuserDetail(null);
    }
  }, []);

  const [update, setUpdate] = useState({
    address: userdetail?.address,
    contact: "",
    role: userdetail?.role,
    userId: userdetail?.userId,
    username: "",
  });

  useEffect(() => {
    setUpdate({
      address: userdetail?.address,
      contact: userdetail?.contact,
      role: userdetail?.role,
      userId: userdetail?.userId,
      username: userdetail?.username,
    });
  }, [userdetail]);

  const handleUserChange = (e) => {
    setUpdate((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = () => {
    console.log(update);
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/user/updateUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: update,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const [value, setValue] = useState(2);

  const handleAvatarChange = (event) => {
    setAvatarUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleRatings = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          marginBottom="25px"
        >
          <Avatar
            alt={userdetail}
            src={avatarUrl}
            sx={{ width: 100, height: 100 }}
          />
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
          <Typography marginTop={8} fontWeight={600} fontSize={18}>
            Profile Settings
          </Typography>
          <Box marginTop={"30px"} display={"flex"}>
            <Box sx={{ marginRight: "6rem", marginBottom: "1rem" }}>
              <TextField
                sx={{}}
                label="Name"
                variant="outlined"
                // defaultValue={userdetail && userdetail.username}
                value={update?.username}
                name="username"
                onChange={handleUserChange}
              />
            </Box>
            <Box>
              <TextField
                sx={{ marginBottom: "1rem" }}
                label="Phone Number"
                variant="outlined"
                name="contact"
                // defaultValue={userdetail && userdetail.contact}
                value={update?.contact}
                onChange={handleUserChange}
              />
            </Box>
          </Box>
          <Typography marginTop={5} fontWeight={600} fontSize={18}>
            Reviews and Ratings
          </Typography>
          <Rating
            name="read-only"
            onChange={handleRatings}
            value={value}
            readOnly
          />
        </Box>

        <Button variant="contained" color="primary" onClick={handleClick}>
          Save Changes
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;

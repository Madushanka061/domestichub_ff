import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  GlobalStyles,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const logged = localStorage.getItem("loggedUser");
    if (logged) {
      setUser(JSON.parse(logged));
    } else {
      setUser(null);
      navigate("/login");
    }
  }, []);

  const theme = createTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProvider = {
      ...data,
      userId: user?.userId,
    };
    console.log(newProvider);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/service_provider/saveServiceProvider",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: newProvider,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        navigate("/services");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [services, setServices] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      url: "http://localhost:8080/api/v1/service/getallservices",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setServices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [serviceId, setServiceId] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setServiceId(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <Navbar />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: 2,
              marginBottom: 2,
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontWeight: 600,
                fontStyle: "oblique",
                color: "Highlight",
                marginTop: 2,
              }}
            >
              POST JOB
            </Typography>
            <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ marginTop: "2px", display: "block", width: "350px" }}>
                <TextField
                  id="providerName"
                  margin="normal"
                  fullWidth
                  label="Title"
                  name="providerName"
                  {...register("providerName", {
                    required: true,
                    pattern: /^[a-zA-Z\s]+$/i,
                  })}
                />{" "}
                {errors.providerName && (
                  <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                    Name is required.
                  </p>
                )}
                <TextField
                  id="description"
                  multiline
                  maxRows={5}
                  margin="normal"
                  fullWidth
                  label=" Description"
                  name="description"
                  {...register("description", {
                    required: true,
                  })}
                />
                {/* <TextField
                  label="Budget"
                  id="budget"
                  fullWidth
                  margin="normal"
                  name="price"
                  {...register("price", {
                    required: true,
                  })}
                  sx={{}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">RS</InputAdornment>
                    ),
                  }}
                /> */}
                <TextField
                  id="location"
                  multiline
                  maxRows={5}
                  margin="normal"
                  fullWidth
                  label=" Location"
                  name="location"
                  {...register("location", {
                    required: true,
                  })}
                />
                <InputLabel htmlFor="grouped-native-select">
                  Select Your Service
                </InputLabel>
                {services && (
                  <>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={serviceId}
                      label="Service"
                      onChange={handleChange}
                      name="service"
                      fullWidth
                      {...register("serviceId", {
                        required: true,
                      })}
                    >
                      {services.map((s, i) => (
                        <MenuItem value={s.serviceId} key={i}>
                          {s.serviceName}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.serviceId && (
                      <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                        Service is required
                      </p>
                    )}
                  </>
                )}
                <TextField
                  id="contact"
                  fullWidth
                  margin="normal"
                  label="Contact No."
                  name="contact"
                  autoComplete="contact"
                  {...register("contact", {
                    required: true,
                    pattern: /^\d{10}$/i,
                  })}
                />
                {errors.contact && (
                  <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                    Contact is required.
                  </p>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // onClick={onSubmit}
                  // href="/"
                  sx={{ mt: 3, mb: 5 }}
                >
                  Post
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default PostJob;

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  GlobalStyles,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/user/saveUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("AA>>", data);
  };

  const theme = createTheme();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            // className="w-full"
          >
            <Box sx={{ marginTop: "2px", display: "block", width: "350px" }}>
              <TextField
                id="name"
                margin="normal"
                fullWidth
                label="Name"
                name="username"
                autoComplete="name"
                {...register("username", {
                  required: true,
                  pattern: /^[a-zA-Z\s]+$/i,
                })}
              />
              {errors.username && (
                <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                  Name is required.
                </p>
              )}

              <TextField
                id="email"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                })}
              />
              {errors.email && (
                <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                  Email is required.
                </p>
              )}

              <TextField
                id="password"
                margin="normal"
                fullWidth
                label=" Password"
                name="password"
                autoComplete="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                  pattern: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/i,
                })}
              />
              {errors.password && (
                <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                  Password Should contain 8-20 charactors
                </p>
              )}

              <TextField
                id="address"
                multiline
                maxRows={4}
                margin="normal"
                fullWidth
                label=" Address"
                name="address"
                autoComplete="address"
                {...register("address", {
                  required: true,
                })}
              />
              {errors.address && (
                <p style={{ fontSize: 10, padding: 0, color: "red" }}>
                  Address is required
                </p>
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

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={onSubmit}
                // href="/"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Alredy have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;

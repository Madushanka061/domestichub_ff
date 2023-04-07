import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
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

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const theme = createTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
            />
            {errors.firstName && <p>Name is required.</p>}

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p style={{ fontSize: 13, padding: 0, color: "red" }}>
                Email is required.
              </p>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label=" Password"
              name="password"
              autoComplete="password"
              autoFocus
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
              })}
            />
            {errors.password && <p>Password Should contain 8-20 charactors</p>}

            <TextField
              id="address"
              multiline
              maxRows={4}
              margin="normal"
              required
              fullWidth
              label=" Address"
              name="address"
              autoComplete="address"
              autoFocus
              {...register("address", {
                required: true,
              })}
            />
            {errors.address && <p>Address is required</p>}

            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact No."
              name="contact"
              autoComplete="contact"
              autoFocus
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("contact", { required: true, max: 10 })}
            />
            {errors.contact && <p>Contact is required.</p>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Alredy have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;

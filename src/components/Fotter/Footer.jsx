import { CssBaseline, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const preventDefault = (event) => event.preventDefault();

function Footer() {
  return (
    <Box sx={{ height: "200px" }}>
      <Grid
        sx={{
          height: 300,

          placeItems: "center",
          background:
            "linear-gradient(90deg, rgba(149,157,162,1) 0%, rgba(95,100,157,1) 0%, rgba(5,4,34,1) 0%)",
        }}
        container
      >
        <CssBaseline />
        <Grid item xs={4}>
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: 5,
              marginTop: 5,
              textAlign: "center",
            }}
          >
            DOMESTICHUB
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 18,
              letterSpacing: 1,
              marginTop: 5,
              marginLeft: 2,
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            typography: "body1",
            "& > :not(style) + :not(style)": {
              ml: 2,
            },
          }}
          onClick={preventDefault}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 5,
              textAlign: "center",
            }}
          >
            MENU
          </Typography>
          <Link href="/jobs" underline="hover" sx={{ color: "white" }}>
            {"Jobs"}
          </Link>
          <Link href="/services" underline="hover" sx={{ color: "white" }}>
            {"Services"}
          </Link>
          <Link href="/about-us" underline="hover" sx={{ color: "white" }}>
            {"About Us"}
          </Link>
          <Link href="/blog" underline="hover" sx={{ color: "white" }}>
            {"Blog"}
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            typography: "body1",
            "& > :not(style) + :not(style)": {
              ml: 2,
            },
          }}
          onClick={preventDefault}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 5,

              textAlign: "center",
            }}
          >
            CONTACT
          </Typography>
          <Link href="/jobs" underline="hover" sx={{ color: "white" }}>
            <span style={{ marginRight: 10 }}>
              <HomeIcon sx={{ width: 25, height: 30 }} />
              {"University Of Peradeniya Sri Lanka"}
            </span>
          </Link>
          <Link href="/email" underline="hover" sx={{ color: "white" }}>
            <span style={{ marginRight: 10 }}>
              <EmailIcon sx={{ width: 25, height: 30 }} />
              {"S17061@sci.pdn.ac.lk"}
            </span>
          </Link>
          <Link href="/contact-no" underline="hover" sx={{ color: "white" }}>
            <span style={{ marginRight: 10 }}>
              <LocalPhoneIcon sx={{ width: 25, height: 30 }} />
              {"+94769224375"}
            </span>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

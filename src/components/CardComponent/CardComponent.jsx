import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ data }) => {
  const navigate = useNavigate();
  const [service, setService] = useState();
  useEffect(() => {
    let config = {
      method: "get",
      url: `http://localhost:8080/api/v1/service/getservicebyid/${data.serviceId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setService(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 600,
        marginTop: 2,

        display: "flex",
        flexDirection: "row",
        marginLeft: 12,
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            height="140"
            image={`/images/service images/${data.serviceId}.jpg`}
            alt=""
            sx={{ width: 150, marginRight: "auto" }}
          />
        </Box>

        <CardContent sx={{ marginRight: "auto", paddingTop: 0, width: 300 }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              {data.providerName}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1px" }}>
            <Typography variant="body2" color="text.secondary">
              Category: {service?.serviceName}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "4px" }}>
            <Typography
              variant="body3"
              color="text.secondary"
              letterSpacing={"1px"}
            >
              {data.location}
            </Typography>
          </Box>
          <Box>
            <Typography
              letterSpacing={"0px"}
              variant="body3"
              color="text.secondary"
            >
              {data.contact}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          width: 150,

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating name="read-only" value={data.ratingvalue} readOnly />
        </Box>
        <Box sx={{ alignItems: "end" }}>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate("/service-profile")}
          >
            View Profile
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

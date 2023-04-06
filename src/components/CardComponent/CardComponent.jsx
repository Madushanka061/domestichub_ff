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
import React from "react";
import Rating from "@mui/material/Rating";

const CardComponent = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
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
            image={data.img}
            alt=""
            sx={{ width: 150, marginRight: "auto" }}
          />
        </Box>

        <CardContent sx={{ marginRight: "auto", paddingTop: 0, width: 150 }}>
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              {data.name}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "1px" }}>
            <Typography variant="body2" color="text.secondary">
              Category: {data.catrgory}
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
              {data.mobile}
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
          <Button size="small" color="primary">
            View Profile
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

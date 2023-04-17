import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const styles = {
  root: {
    maxWidth: 600,

    transition: "transform .2s",
    "&:hover": {
      transform: "scale(3.05)",
    },
  },
  media: {
    height: "150px",
  },
};

function CardHome({ item }) {
  console.log(item);

  return (
    <>
      <Box sx={{ margin: 0 }}>
        <Card style={styles.root}>
          <CardMedia
            style={styles.media}
            image={item.image}
            title="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default CardHome;

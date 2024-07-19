import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Title from "./Title";

function ViewInfo({ visible, cuisine, restaurant }) {
  return (
    <Grid
      container
      pt={5}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Grid
        xs={12}
        md={6}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography variant="h3">Restaurants</Typography>

        {restaurant?.length > 0
          ? restaurant?.map((x) => <Title data={x.name} />)
          : "no data"}
      </Grid>

      <Grid xs={12} md={6} display='flex' alignItems={"center"} flexDirection={"column"}>
        <Typography variant="h3">Types of Cuisines</Typography>

        {cuisine?.length > 0
          ? cuisine?.map((x) => <Title data={x.name} />)
          : "no data"}
      </Grid>
    </Grid>
  );
}

export default ViewInfo;

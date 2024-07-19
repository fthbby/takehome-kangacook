import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Title from "./Title";

function ViewInfo({ visible, cuisine, restaurant }) {
  return (
    <Box pt={5}>
      {restaurant?.length > 0
        ? restaurant?.map((x) => <Title data={x.name}/>)
        : "no data"}
      <br />
      {cuisine?.length > 0
        ? cuisine?.map((x) => <Title data={x.name}/>)
        : "no data"}
    </Box>
  );
}

export default ViewInfo;

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ViewInfo from "../components/ViewInfo";

function Home() {
  // let url = "http://localhost:8000/";
  let url = "http://ec2-3-17-109-190.us-east-2.compute.amazonaws.com:8000/";

  const [restaurant, setRestaurant] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [visible, setVisible] = useState(false);

  const toggleButton = () => {
    setVisible(!visible);
  };

  const grabData = async () => {
    let res = await axios.get(`${url}api/restaurants/`);

    if (res.data) {
      setRestaurant(res.data);
    }
  };

  const grabCuisines = async () => {
    let res = await axios.get(`${url}api/cuisine/`);

    if (res.data) {
      setCuisine(res.data);
      console.log(res.data);
    }
  };

  useEffect(() => {
    grabData();
    grabCuisines();
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2" pb={5}>
        Restaurants & Cuisines
      </Typography>
      <Button
        sx={{ background: "pink", color: "black" }}
        onClick={toggleButton}
      >
        {visible ? "Click to Close" : "Click to Open"}
      </Button>
      <Typography></Typography>
      {visible ? (
        <ViewInfo visible={visible} restaurant={restaurant} cuisine={cuisine} />
      ) : (
        ""
      )}
    </Grid>
  );
}

export default Home;

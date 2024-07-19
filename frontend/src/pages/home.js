import React from "react";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  // const data = [
  //   { id: 1, name: "hello" },
  //   { id: 2, name: "herro" },
  // ];

  let url = "http://localhost:8000/";
  const [data, setData] = useState([]);

  const grabData = async () => {
    let res = await axios.get(`${url}api/restaurants/`);

    if (res) {
      setData(res.data);
    }
  };

  useEffect(() => {
    grabData();
  }, []);

  return (
    <Box>{data?.length > 0 ? data?.map((x) => <Box>{x.name}</Box>) : ""}</Box>
  );
}

export default Home;

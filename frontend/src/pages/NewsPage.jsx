// NewsPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import MediaCard from "../components/MediaCard";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const apiKey1 = import.meta.env.VITE_API_KEY; // It's best to keep this secret!
  useEffect(() => {
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = "Company layoff";
    axios
      .get(`${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey1}`)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={12}>
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <MediaCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsPage;

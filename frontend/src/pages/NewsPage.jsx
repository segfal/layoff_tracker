import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import MediaCard from '../components/MediaCard';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = "Company layoff";

    console.log('API Key:', apiKey); // Debugging line

    axios.get(`${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}`)
      .then(response => {
        console.log('Data fetched:', response.data); // Debugging line
        setArticles(response.data.articles);
      })
      .catch(err => {
        console.error('Error fetching data:', err); // Debugging line
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

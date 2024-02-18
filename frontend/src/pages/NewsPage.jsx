// NewsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import MediaCard from '../components/MediaCard';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  // ... fetch articles with axios ...
  useEffect(() => {
    const apiKey = 'c2fef881efcc45f385eb8005e3341d8c'; // It's best to keep this secret!
    const baseUrl = 'https://newsapi.org/v2/everything';
    const query = 'big tech layoffs';

    axios.get(`${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}`)
      .then(response => {
        setArticles(response.data.articles);
       
      })
      .catch(error => {
        setError(error);
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

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MediaCard from '../components/MediaCard';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3; // Number of articles you want to show per page

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = "Company layoff";

    axios.get(`${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };
  const styles = {
    headerSection: {
      borderBottom: "5px solid white",
      padding: "20px 0",
      backgroundColor: "white",
      marginBottom: "20px"
    },
    title: {
      color: "#2E4764",
      fontWeight: "bold",
      marginBottom: "10px"
    },
    subtitle: {
      color: "#2E4764",
      marginBottom: "20px"
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0'
    },
    pagination: {
      '.MuiPaginationItem-root': {
        color: '#007bff', // Active page number color
        '&:hover': {
          backgroundColor: '#0056b3', // Hover color
        },
      },
    },
  };

  return (
    <div>
      {/* Layoffs Insight App Info */}
      <Box sx={styles.headerSection}>
        <Typography variant="h4" sx={styles.title}>Welcome to LayOff Insight</Typography>
        <Typography variant="h5" sx={styles.subtitle}>Navigate Through Layoffs With Confidence</Typography>
        <Typography variant="body1" sx={styles.subtitle}>Gain insights into layoff trends, compare company strategies, and access resources to help you through the transition.</Typography>
      </Box>

      {/* Articles Grid */}
      <Grid container spacing={3}>
        {currentArticles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <MediaCard article={article} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={styles.paginationContainer}>
        <Pagination
          count={Math.ceil(articles.length / articlesPerPage)}
          page={currentPage}
          onChange={paginate}
          sx={styles.pagination}
          showFirstButton
          showLastButton
        />
      </Box>
    </div>
  );
};

export default NewsPage
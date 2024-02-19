import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import MediaCard from "../components/MediaCard";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import fired from "../images/fired.jpeg";
import TypingEffect from "../components/TypingEffect";
import { Button } from "@mui/material";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
 


  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = "Company layoff";

    axios
      .get(`${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}`)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const styles = {
    headerSection: {
      borderBottom: "5px solid white",
      padding: "20px 0",
      backgroundColor: "white",
      marginBottom: "20px",
    },
    title: {
      color: "#2E4764",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      color: "#2E4764",
      marginBottom: "20px",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "20px 0",
    },
    pagination: {
      ".MuiPaginationItem-root": {
        color: "#007bff",
        "&:hover": {
          backgroundColor: "#0056b3",
        },
      },
    },
  };

  const gridSpacing = 3;

  return (
    <div className="flex flex-col" style={{ backgroundColor: "white" }}>
      <section className="pb-11">
        {/* Grid container centered with equal spacing on each side */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Grid
            container
            spacing={gridSpacing}
            justifyContent="center"
            style={{ maxWidth: 1200, margin: "auto" }}
          >
            {currentArticles.map((article, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <MediaCard article={article} />
              </Grid>
            ))}
          </Grid>
        </Box>

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
      </section>

         </div>
  );
};

export default NewsPage;

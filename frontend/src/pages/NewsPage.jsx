import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MediaCard from "../components/MediaCard";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import layoffs from "../images/1.png";
import fired from "../images/fired.jpeg"


const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/dashboard/home");
  };

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

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "white" }}
    >
      <section
        className="flex justify-evenly pb-5"
        style={{ borderBottom: "5px solid white" }}
      >
        <div className="h-full w-1/2">
          <div className="flex items-center h-80">
            <div>
              <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>
                Welcome to LayOff Insight
              </p>
              <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>
                Navigate Through Layoffs With Confidence
              </p>
              <p className="mt-5" style={{ color: "#2E4764" }}>
                Gain insights into layoff trends, compare company strategies,
                and access resources to help you through the transition.
              </p>
            </div>
          </div>
          <div className="space-x-10">
            <button
              onClick={handleLogin}
              className="h-16 w-48 font-bold text-xl text-white rounded-lg"
              style={{ backgroundColor: "#36454F" }}
            >
              View Trends
            </button>
            <span className="text-xl font-bold" style={{ color: "#2E4764" }}>
              Learn More
            </span>
          </div>
        </div>
        <img src={fired} alt="Layoff Trends" className="w-1/3"></img>
      </section>

      <section className="pb-11">
        <p className="text-4xl font-bold text-white mt-10 text-center">
          Key Features
        </p>
        <Grid container spacing={3}>
          {currentArticles.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <MediaCard article={article} />
            </Grid>
          ))}
        </Grid>

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

      <footer className="pb-4">
        <div className="flex justify-between ml-24 mr-24 pb-18 mt-10">
          <div className="ml-8 flex mr-5 pr-10">
            <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>
              LayOff Insight
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;

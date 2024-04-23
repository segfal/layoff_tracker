const axios = require('axios');
const dotenv = require('dotenv').config();

// Get layoff news
const getLayoffNews = async () => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        return news;
        


    } catch (error) {
        console.error(error);
    }
}

// Get layoff news by state
const getLayoffNewsByState = async (state) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff+${state}&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        return news;
    } catch (error) {
        console.error(error);
    }
}

// Get layoff news by company
const getLayoffByCompany = async (company) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff+${company}&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        return news;
        
    } catch (error) {
        console.error(error);
    }
}





module.exports = {
    getLayoffNews,
    getLayoffNewsByState,
    getLayoffByCompany
};


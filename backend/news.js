const axios = require('axios');
const dotenv = require('dotenv').config();


const getLayoffNews = async (res) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        res.json(news);


    } catch (error) {
        console.error(error);
    }
}


const getLayoffByState = async (res, state) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff+${state}&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        res.json(news);
    } catch (error) {
        console.error(error);
    }
}

const getLayoffByCompany = async (res, company) => {
    try {
        const url = `https://newsapi.org/v2/everything?q=layoff+${company}&apiKey=${process.env.NEWS_API_KEY}`;
        const response = await axios.get(url);
        const news = response.data.articles;
        res.json(news);
    } catch (error) {
        console.error(error);
    }
}






module.exports = {
    getLayoffNews,
    getLayoffByState,
    getLayoffByCompany
};


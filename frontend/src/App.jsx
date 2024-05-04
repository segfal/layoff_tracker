import React from "react";
import LandingPage from "./Components/LandingPage";
import Dashboard from "./Components/Dashboard";
import NewsFeed from "./Components/NewsFeed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/newspage" element={<NewsFeed/>}></Route>
        </Routes>
      </Router>



    </div>
  );
};

export default App;

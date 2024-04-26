import React, { useEffect, useState } from "react";
import FiltersDashboards from "./FiltersDashboards";
import "../css/Dashboard.css";
const Dashboard = () => {
  // const [data,setData] = useState([]);

  //data for testing
  const data = [
    {
      id: 0,
      layoff_date: "2021-01-01",
      company_name: "Company 1",
      city: "City 1",
      state: "State 1",
    },
    {
      id: 1,
      layoff_date: "2021-01-01",
      company_name: "Company 2",
      city: "City 2",
      state: "State 2",
    },
    {
      id: 2,
      layoff_date: "2021-01-01",
      company_name: "Company 3",
      city: "City 3",
      state: "State 3",
    },
    {
      id: 3,
      layoff_date: "2021-01-01",
      company_name: "Company 4",
      city: "City 4",
      state: "State 4",
    },
    {
      id: 4,
      layoff_date: "2021-01-01",
      company_name: "Company 5",
      city: "City 5",
      state: "State 5",
    },
  ];
  return (
    <div className="dashboard">
      <FiltersDashboards />
      <h2>Recent Layoffs</h2>

      {/*
        Everything inside the div with the class name "main-container" will be the main content of the dashboard.
        This is where you will put all the cards, tables, graphs, etc.
        */}
      <div className="main-container">
        <div className="container">
          {data.map((d) => {
            return (
              <div className="card" key={d.id}>
                <h3>{d.company_name}</h3>
                <p>
                  {d.city}, {d.state}
                </p>
                <p>{d.layoff_date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

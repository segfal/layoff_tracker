import React, { useEffect, useState } from "react";
import FiltersDashboards from "./FiltersDashboards";
import "../css/Dashboard.css";
import axios from "axios";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/page/${page}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [page]);

  //data for testing
  // const data = [
  //   {
  //     id: 0,
  //     layoff_date: "2021-01-01",
  //     company_name: "Company 1",
  //     city: "City 1",
  //     state: "State 1",
  //   },
  //   {
  //     id: 1,
  //     layoff_date: "2021-01-01",
  //     company_name: "Company 2",
  //     city: "City 2",
  //     state: "State 2",
  //   },
  //   {
  //     id: 2,
  //     layoff_date: "2021-01-01",
  //     company_name: "Company 3",
  //     city: "City 3",
  //     state: "State 3",
  //   },
  //   {
  //     id: 3,
  //     layoff_date: "2021-01-01",
  //     company_name: "Company 4",
  //     city: "City 4",
  //     state: "State 4",
  //   },
  //   {
  //     id: 4,
  //     layoff_date: "2021-01-01",
  //     company_name: "Company 5",
  //     city: "City 5",
  //     state: "State 5",
  //   },
  // ];
  return (
    <div className="dashboard">
      <FiltersDashboards />
      <h2>Recent Layoffs</h2>
      <Pagination currentPage={page} setPage={setPage} />
      {/*
        Everything inside the div with the class name "main-container" will be the main content of the dashboard.
        This is where you will put all the cards, tables, graphs, etc.
        */}
      <div className="main-container">
        {data && !filtersApplied ? (
          Object.entries(data).map((company) => {
            return (
              <div key={company[1]} className="layoff-container">
                <h2>{company[0]}</h2>
                <hr />
                {company[1].map((info) => {
                  return (
                    <div className="company-layoff-container" key={info}>
                      <p className="">
                        State: <span>{info[0]}</span>
                      </p>
                      <p className="">
                        Layoff Count: <span>{info[3]}</span>
                      </p>
                      <p className="">
                        WARN notice Date: <span>{info[4]}</span>
                      </p>
                      <p className="">
                        Effective Date: <span>{info[5]}</span>
                      </p>
                      <p className="">
                        Type: <span>{info[6]}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

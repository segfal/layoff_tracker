import React, { useEffect, useState } from "react";
import FiltersDashboards from "./FiltersDashboards";
import "../css/Dashboard.css";
import axios from "axios";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      if (!filtersApplied) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/${page}`
          );
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getData();
  }, [page, filtersApplied]);

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
      <FiltersDashboards
        setPage={setPage}
        page={page}
        setFiltersApplied={setFiltersApplied}
        setData={setData}
        filtersApplied={filtersApplied}
        data={data}
        setFilterData={setFilterData}
      />
      <h2>Recent Layoffs</h2>
      <Pagination setPage={setPage} currentPage={page} />
      {/*
        Everything inside the div with the class name "main-container" will be the main content of the dashboard.
        This is where you will put all the cards, tables, graphs, etc.
        */}
      <div className="main-container">
        {data && !filtersApplied ? (
          Object.entries(data).map((company, index) => {
            return (
              <div key={index} className="layoff-container">
                <h2>{company[0]}</h2>
                <hr />
                {company[1].map((info, jIndex) => {
                  return (
                    <div
                      className="company-layoff-container"
                      key={info + jIndex}
                    >
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
          <div className="layoff-container">
            {filterData.map((company, index) => {
              return (
                <div
                  className="company-layoff-container"
                  key={company[1] + `${index}`}
                >
                  <h2 className="company-name">{company[1]}</h2>
                  <p className="">
                    State: <span>{company[0]}</span>
                  </p>
                  <p className="">
                    Layoff Count: <span>{company[3]}</span>
                  </p>
                  <p className="">
                    WARN notice Date: <span>{company[4]}</span>
                  </p>
                  <p className="">
                    Effective Date: <span>{company[5]}</span>
                  </p>
                  <p className="">
                    Type: <span>{company[6]}</span>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import { React, useState, useEffect, useRef } from "react";
import axios from "axios";

const types = {
  layoff: {
    "Layoff Permanent": true,
    "Permanent Layoff": true,
    "Layoff Temporary": true,
    "Permanent Layoff /Reduction in Force": true,
    Layoff: true,
    "Mass Layoff - No Recall": true,
  },
  closure: {
    "Permanent Closure": true,
    "Closure Permanent": true,
    Closing: true,
    "Plant Closure": true,
    "Facility closure": true,
    "Facility Closure, Workforce Reduction": true,
  },
  reduction: {
    "Workforce Reduction": true,
    "Permanent Layoff /Reduction in Force": true,
    "Facility Closure, Workforce Reduction": true,
  },
};

const FiltersDashboards = ({
  page,
  setPage,
  setFiltersApplied,
  setData,
  filtersApplied,
  data,
  setFilterData,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOption, setDropdownOption] = useState("");
  const [state, setState] = useState("");

  function handleDropdown(event) {
    setDropdownOpen(!dropdownOpen);
    setDropdownOption(event.target.textContent);
    // setFiltersApplied(true);
  }

  async function searchByState(event) {
    event.preventDefault();
    try {
      const currentState = document
        .getElementById("searchBar")
        .value.replace(/\s+/g, "-");
      setState(currentState);
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/state/${currentState}/1`
      );
      setData(response.data);
      setFilterData(response.data);
      setPage(1);
      setFiltersApplied(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function resetData() {
    document.querySelector(".search-bar").reset();
    setState("");
    setFiltersApplied(false);
    setPage(1);
    setDropdownOption("");
  }

  useEffect(() => {
    async function getStateByPage() {
      if (state) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/state/${state}/${page}`
          );
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getStateByPage();
  }, [page]);

  useEffect(() => {
    if (dropdownOption && dropdownOption !== "Reason") {
      let filterByTypeData;
      if (!filtersApplied) {
        console.log("no filters applied");
      } else {
        filterByTypeData = data.filter((company) => {
          return types[dropdownOption.toLowerCase()][company[6]];
        });
      }
      setFilterData(filterByTypeData);
    }
  }, [dropdownOption]);

  return (
    <div className="filters-dashboard">
      <div className="dropdown">
        <button className="dropdown-btn" onClick={handleDropdown}>
          {dropdownOption ? dropdownOption : "Reason"}
        </button>
        {dropdownOpen ? (
          <div className="menu">
            <div className="menu-item">
              <button onClick={handleDropdown}>Layoff</button>
            </div>
            <div className="menu-item">
              <button onClick={handleDropdown}>Closure</button>
            </div>
            <div className="menu-item">
              <button onClick={handleDropdown}>Reduction</button>
            </div>
          </div>
        ) : null}
      </div>
      <form className="search-bar" onSubmit={searchByState}>
        <input
          type="text"
          placeholder="Enter a state"
          id="searchBar"
          required
        />
        <button type="submit">Search</button>
        <button type="button" className="reset-btn" onClick={resetData}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FiltersDashboards;

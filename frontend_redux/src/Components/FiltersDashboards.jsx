import { React, useState } from "react";
import axios from "axios";

const FiltersDashboards = ({ page, setPage, setFiltersApplied, setData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOption, setDropdownOption] = useState("");

  function handleDropdown(event) {
    setDropdownOpen(!dropdownOpen);
    setDropdownOption(event.target.textContent);
  }

  async function searchByState(event) {
    event.preventDefault();
    try {
      const state = document
        .getElementById("searchBar")
        .value.replace(/\s+/g, "-");
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/state/${state}/7`
      );
      setData(response.data);
      setPage(1);
      setFiltersApplied(true);
    } catch (error) {
      console.log(error);
    }
    event.target.reset();
  }

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
        <input type="text" placeholder="Enter a state" id="searchBar" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FiltersDashboards;

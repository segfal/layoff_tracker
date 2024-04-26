import { React, useState } from "react";

const FiltersDashboards = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOption, setDropdownOption] = useState("");

  function handleDropdown(event) {
    setDropdownOpen(!dropdownOpen);
    setDropdownOption(event.target.textContent);
  }

  async function searchByState(event) {
    event.preventDefault();
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
        <input type="text" placeholder="Enter a state" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FiltersDashboards;

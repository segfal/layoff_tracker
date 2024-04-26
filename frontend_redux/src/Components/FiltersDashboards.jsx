import { React, useState } from "react";

const FiltersDashboards = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOption, setDropdownOption] = useState("");

  function handleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  async function searchByState(event) {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="filters-dashboard">
      <div className="dropdown">
        <button className="dropdown-btn">
          {dropdownOption ? dropdownOption : "Reason"}
        </button>
      </div>
      <form className="search-bar" onSubmit={searchByState}>
        <input type="text" placeholder="Enter a state" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FiltersDashboards;

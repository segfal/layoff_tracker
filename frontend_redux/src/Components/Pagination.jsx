import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Pagination.css";

const Pagination = ({ setPage, currentPage }) => {
  let [pagination, setPagination] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    async function getPages() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/record-count`
        );
        setPageCount(response.data);
        let pages = [];
        for (let i = 1; i <= response.data; i++) {
          if (i > 8) {
            break;
          }
          pages.push(i);
        }
        setPagination(pages);
        console.log(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    getPages();
  }, []);

  function updatePagination(page) {
    if (page == currentPage - 1 && !(page > pageCount && page < 0)) {
      pagination.unshift(pagination[0] - 1);
      setPage(page);
    } else if (page == currentPage + 1 && !(page > pageCount)) {
      pagination.shift();
      let last = pagination[pagination.length - 1];
      pagination.push(last + 1);
      setPage(page);
    }
  }

  return (
    <div className="pagination-container">
      {pagination.map((number) => {
        return (
          <button
            key={number}
            onClick={() => updatePagination(number)}
            className={`page-btn ${currentPage == number ? "active" : ""}`}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

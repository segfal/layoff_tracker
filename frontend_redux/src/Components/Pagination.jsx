import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Pagination.css";

const Pagination = ({ setPage, currentPage }) => {
  const [pagination, setPagination] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    async function getPages() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/record-count`
        );
        setPageCount(response.data);
        generatePagination(response.data, currentPage);
      } catch (error) {
        console.log(error);
      }
    }
    getPages();
  }, []);

  useEffect(() => {
    generatePagination(pageCount, currentPage);
  }, [currentPage, pageCount]);

  const generatePagination = (totalPages, currentPage) => {
    let pages = [];
    const visiblePages = 8;
    const halfVisiblePages = Math.floor(visiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    if (currentPage > halfVisiblePages) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - halfVisiblePages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    setPagination(pages);
  };

  const updatePagination = (page) => {
    setPage(page);
  };

  return (
    <div className="pagination-container">
      {pagination.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              if (typeof item === "number") {
                updatePagination(item);
              }
            }}
            className={`page-btn ${currentPage === item ? "active" : ""} ${
              typeof item === "number" ? "" : "disabled"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

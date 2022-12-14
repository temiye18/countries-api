import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Pagination.css";

const Pagination = ({
  handlePageChange,
  handlePrev,
  handleNext,
  currentPage,
  maxPageLimit,
  minPageLimit,
  countriesLength,
  postPerPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(countriesLength / postPerPage); i++) {
    pages.push(i);
  }

  const renderPage = pages.map((page) => {
    if (page < maxPageLimit + 1 && page > minPageLimit) {
      return (
        <button
          key={page}
          className={`page-number ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    } else {
      return null;
    }
  });

  let pageIncrementBtn = null;
  if (pages.length > maxPageLimit) {
    pageIncrementBtn = (
      <button className="page-number page-dots" onClick={handleNext}>
        . . .
      </button>
    );
  }

  let pageDecrementBtn = null;
  if (minPageLimit >= 1) {
    pageDecrementBtn = (
      <button className="page-number page-dots" onClick={handlePrev}>
        . . .
      </button>
    );
  }

  return (
    <section className="pagination">
      <div className="page-btn-container">
        <button
          className="prev-btn"
          onClick={handlePrev}
          disabled={currentPage === pages[0] ? true : false}
        >
          <FaLongArrowAltLeft /> Prev
        </button>

        <div className="page-number-container">
          {pageDecrementBtn}
          {renderPage}
          {pageIncrementBtn}
          <p className="pages-mobile">
            Page {currentPage} of {pages.length}
          </p>
        </div>
        <button
          className="next-btn"
          onClick={handleNext}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          Next <FaLongArrowAltRight />
        </button>
      </div>
    </section>
  );
};

export default Pagination;

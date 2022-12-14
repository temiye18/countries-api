import { useState } from "react";

const usePaginate = (itemsPerPage, maxiPageLimit, scrollPageToView) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(itemsPerPage);

  const [pageLimit] = useState(5);
  const [maxPageLimit, setMaxPageLimit] = useState(maxiPageLimit);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const resetPage = () => {
    setCurrentPage(1);
    setMaxPageLimit(maxiPageLimit);
    setMinPageLimit(0);
  };

  const handlePageChange = (page) => {
    scrollPageToView();
    setCurrentPage(Number(page));
  };

  const handlePrev = () => {
    scrollPageToView();
    setCurrentPage((prevPage) => prevPage - 1);
    if ((currentPage - 1) % pageLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinPageLimit(minPageLimit - pageLimit);
    }
  };

  const handleNext = () => {
    scrollPageToView();
    setCurrentPage((prevPage) => prevPage + 1);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinPageLimit(minPageLimit + pageLimit);
    }
  };

  return {
    currentPage,
    postPerPage,
    maxPageLimit,
    minPageLimit,
    handlePageChange,
    handlePrev,
    handleNext,
    resetPage,
  };
};

export default usePaginate;

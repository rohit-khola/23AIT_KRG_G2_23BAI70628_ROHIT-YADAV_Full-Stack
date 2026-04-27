import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={() => setCurrentPage((p) => p - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage((p) => p + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
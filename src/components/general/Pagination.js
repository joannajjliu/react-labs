import React from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  console.log(`currentPage: ${currentPage}`);
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={(e) => {
              paginate(e, currentPage - 1);
            }}
            href="/movies"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item  ${number === currentPage ? `active` : ""}`}
          >
            <a
              onClick={(e) => {
                paginate(e, number);
              }}
              href="/movies"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={(e) => {
              paginate(e, currentPage + 1);
            }}
            href="/movies"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

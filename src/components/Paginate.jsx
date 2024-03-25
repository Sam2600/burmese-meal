import React from "react";
import ReactPaginate from "react-paginate";

export const Paginate = ({ handlePageClick, totalPages }) => {
  return (
    <ReactPaginate
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      className="flex flex-row gap-4 mx-auto p-5 border shadow-sm rounded my-5"
      breakLabel={<span className="mx-2">...</span>}
      nextLabel={
        <span className="w-8 h-8 flex items-center justify-center bg-orange-300 text-center text-white font-semibold rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      }
      previousLabel={
        <span className="w-8 h-8 flex items-center justify-center bg-orange-300 text-center text-white font-semibold rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      }
      onPageChange={handlePageClick}
      pageCount={totalPages}
      containerClassName="flex items-center justify-center my-4"
      pageClassName="block border border-solid border-lightGray hover:text-white hover:bg-orange-300 cursor-pointer w-8 h-8 flex items-center justify-center rounded-md"
      activeClassName="bg-orange-300 text-white"
    />
  );
};

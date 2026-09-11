import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const RoomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm">
        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl text-text transition-all duration-300 hover:bg-background hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <FiChevronLeft />
        </button>

        {/* Pages */}
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-semibold transition-all duration-300 ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-text hover:bg-background hover:text-primary"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl text-text transition-all duration-300 hover:bg-background hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next page"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RoomPagination;
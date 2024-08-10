import React, { useState } from "react";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-[390px] relative flex justify-between items-center">
      <p
        onClick={handlePrev}
        className={`text-sm font-bold text-left uppercase cursor-pointer ${
          currentPage === 1 ? "text-[#c0c0c0]" : "text-[#808080]"
        }`}
      >
        prev
      </p>
      <div className="flex gap-7">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`cursor-pointer ${
              currentPage === index + 1
                ? "w-[42px] h[42px] relative"
                : "text-[#c0c0c0]"
            }`}
          >
            {currentPage === index + 1 ? (
              <>
                {/* <svg
                  width={42}
                  height={42}
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute"
                >
                  <circle cx={21} cy={21} r={21} fill="#7C4DFF" />
                </svg> */}
                <p className="text-center top3 text-sm font-bold  uppercase bg-bs-violet p-3  rounded-full text-white">
                  {index + 1}
                </p>
              </>
            ) : (
              <p className="text-sm font-bold text-left uppercase py-3 ">
                {index + 1}
              </p>
            )}
          </div>
        ))}
      </div>
      <p
        onClick={handleNext}
        className={`text-sm font-bold text-left uppercase cursor-pointer ${
          currentPage === totalPages ? "text-[#c0c0c0]" : "text-[#1d1d1d]"
        }`}
      >
        next
      </p>
    </div>
  );
};

export default Pagination;

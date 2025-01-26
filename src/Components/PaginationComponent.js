import React, { useEffect, useState } from "react";

const PaginationComponent = () => {
  const [dataCache] = useState(new Map()); // Cache for API data
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    // Fetch data for the initial page on mount
    handlePageChange(currentPage);
  }, []);

  const fetchData = async (pageNumber) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?page=${pageNumber}`
    );
    const result = await response.json();
    return result;
  };

  const handlePageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);

    if (dataCache.has(pageNumber)) {
      // Use cached data if available
      setData(dataCache.get(pageNumber));
    } else {
      // Fetch data and cache it
      const result = await fetchData(pageNumber);
      dataCache.set(pageNumber, result);
      setData(result);
    }
  };

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(100 / itemsPerPage); // Assuming 100 total items

  return (
    <div>
      <h2>Pagination Component with Caching</h2>
      <ul>
        {currentItems.map((item, indx) => (
          <li key={item.id}>
            <strong>
              {indx + 1}-{item.name}
            </strong>
            <p>{item.website}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            style={{
              margin: "0 5px",
              padding: "10px",
              backgroundColor:
                currentPage === index + 1 ? "#007bff" : "#f8f9fa",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationComponent;

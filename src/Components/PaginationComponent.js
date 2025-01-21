import React, { useEffect, useState } from "react";

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();
      setData(result);
    };
    console.log('useEffect calling');
    fetchData();
  }, [currentPage]);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Pagination Component</h2>
      <ul>
        {currentItems.map((item,indx) => (
          <li key={item.id}>
            <strong>{indx+1}-{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            style={{
              margin: "0 5px",
              padding: "10px",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#f8f9fa",
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

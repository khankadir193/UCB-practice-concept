import React, { useEffect, useState } from "react";

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      // console.log("result...", result);
      setData(result);
    };
    console.log('useEffect calling');
    fetchData();
  }, []);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  console.log('indexOfLastItem....???',indexOfLastItem);
  console.log('indexOfFirstItem....???',indexOfFirstItem);
  console.log('currentItems....???',currentItems);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = async (pageNumber) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log("result...", result);
    setData(result);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Pagination Component</h2>
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
        {Array.from({ length: 10 }, (_, index) => (
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

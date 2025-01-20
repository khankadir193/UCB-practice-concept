import React, { useEffect, useState } from "react";

const PaginationComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      console.log("result...", result);
      setData(result);
    };
    fetchData();
  },[]);

  return (
    <div>
      <h2>Pagination Components...</h2>
    </div>
  );
};

export default PaginationComponent;

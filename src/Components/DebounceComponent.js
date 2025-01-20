import React, { useCallback, useState } from "react";
import { debounce } from "lodash";

const DebounceComponent = () => {
  const [value, setValue] = useState();

  const debounceFunction = (inputValue) => {
    console.log("inputValue...", inputValue);
  };

  const debounceRes = useCallback(debounce(debounceFunction, 1000),[]);

  const handleChange = (event) => {
    setValue(event.target.value);
    debounceRes(event.target.value);
  };

  return (
    <div >
      <h2>Searching the input value:-</h2>
      <input
        type="text"
        placeholder="searching text..."
        onChange={handleChange}
      />
    </div>
  );
};

export default DebounceComponent;

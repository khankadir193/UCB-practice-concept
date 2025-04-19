import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    console.log("inputRef.current", inputRef);
    inputRef.current.focus();
  };

  return <div>
    <input type="text" ref={inputRef} placeholder="enter your text" />
  </div>;
};

export default RefExample;

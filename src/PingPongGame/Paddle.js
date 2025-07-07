import React, { useEffect, useState } from "react";
// import "./Paddle.css"; // assuming you have basic CSS

const Paddle = () => {
  const [leftPaddleY, setLeftPaddleY] = useState(100);
  const [rightPaddleY, setRightPaddleY] = useState(100);
  const step = 10; // how much to move on each key press

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          setLeftPaddleY((prev) => Math.max(0, prev - step));
          break;
        case "s":
          setLeftPaddleY((prev) => Math.min(400, prev + step)); // limit bottom
          break;
        case "ArrowUp":
          setRightPaddleY((prev) => Math.max(0, prev - step));
          break;
        case "ArrowDown":
          setRightPaddleY((prev) => Math.min(400, prev + step));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div
        className="paddle-left"
        style={{ top: leftPaddleY + "px" }}
      ></div>
      <div
        className="paddle-right"
        style={{ top: rightPaddleY + "px" }}
      ></div>
    </>
  );
};

export default Paddle;

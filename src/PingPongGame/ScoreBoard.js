import React from "react";

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <h2>Score Board</h2>
      <div className="score">
        <div className="player-score">
          <span>Player 1: 0</span>
        </div>
        <div className="player-score">
          <span>Player 2: 0</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;

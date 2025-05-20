import React from "react";
import "./GameOver.css";

const GameOver = ({ gameStats, onRestart }) => {
  return (
    <div className="GameOver">
      <div className="GameOver-content">
        <h1>Game Over</h1>
        <div className="GameOver-stats">
          <p>Level: <span>{gameStats.level}</span></p>
          <p>Points: <span>{gameStats.points}</span></p>
        </div>
        <button className="Button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
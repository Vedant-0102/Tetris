import Menu from "./Menu";
import Tetris from "./Tetris";
import GameOver from "./GameOver";

import { useGameOver } from "../hooks/useGameOver";
import { useGameStats } from "../hooks/useGameStats";
import { useState } from "react";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [gameStats, setGameStats] = useState(null);
  const [showGameOver, setShowGameOver] = useState(false);

  const start = () => {
    resetGameOver();
    setShowGameOver(false);
  };

  const handleGameOver = (stats) => {
    setGameStats(stats);
    setShowGameOver(true);
    setGameOver(true);
  };

  return (
    <div className="Game">
      {gameOver ? (
        showGameOver && gameStats ? (
          <GameOver gameStats={gameStats} onRestart={start} />
        ) : (
          <Menu onClick={start} />
        )
      ) : (
        <Tetris 
          rows={rows} 
          columns={columns} 
          setGameOver={handleGameOver} 
        />
      )}
    </div>
  );
};

export default Game;
import "./Tetris.css";

import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";

import { useBoard } from "../hooks/useBoard.jsx";
import { useGameStats } from "../hooks/useGameStats.jsx";
import { usePlayer } from "../hooks/usePlayer.jsx";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });

  const handleGameOver = () => {
    setGameOver(gameStats);
  };

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={handleGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
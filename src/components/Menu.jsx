import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <h1>TETRIS</h1>
    <button className="Button" onClick={onClick}>
      Play Game
    </button>
  </div>
);

export default Menu;
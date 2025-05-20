import React from "react";
import "./TouchControls.css";
import { Action } from "../hooks/Input";

const TouchControls = ({ handleInput }) => {
  return (
    <div className="TouchControls">
      <div className="TouchControls-row">
        <button 
          className="TouchControls-button"
          onClick={() => handleInput({ action: Action.Rotate })}
        >
          ↻
        </button>
      </div>
      <div className="TouchControls-row">
        <button 
          className="TouchControls-button"
          onClick={() => handleInput({ action: Action.Left })}
        >
          ←
        </button>
        <button 
          className="TouchControls-button"
          onClick={() => handleInput({ action: Action.SlowDrop })}
        >
          ↓
        </button>
        <button 
          className="TouchControls-button"
          onClick={() => handleInput({ action: Action.Right })}
        >
          →
        </button>
      </div>
      <div className="TouchControls-row">
        <button 
          className="TouchControls-button TouchControls-button-wide"
          onClick={() => handleInput({ action: Action.FastDrop })}
        >
          DROP
        </button>
      </div>
    </div>
  );
};

export default TouchControls;

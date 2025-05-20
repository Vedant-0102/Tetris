import React from "react";
import "./Preview.css";
import Preview from "./Preview";

const Previews = ({ tetrominoes }) => {
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  return (
    <div className="Previews-container">
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  );
};

export default React.memo(Previews);


// React.memo is a higher-order component (HOC) that memoizes your React component. Here's what it does:

// 1. Performance Optimization : It prevents unnecessary re-renders of your component when its props haven't changed.
// 2. Shallow Comparison : By default, it performs a shallow comparison of props. If the props are the same (by reference), it skips rendering and reuses the last rendered result.
// 3. Component Caching : It essentially "remembers" the previous render output and only updates when needed.
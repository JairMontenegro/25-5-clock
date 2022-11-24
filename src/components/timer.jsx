import React from "react";

const Timer = (props) => {
  const {
    onHandleDecrease,
    onHandleIncrease,
    play,
    length,
    nameTimer,
    idLabel,
    idLength,
    idDecrement,
    idIncrement,
  } = props;
  return (
    <div>
      <h3 id={idLabel}>{nameTimer}</h3>
      <div id={idLength}>{length}</div>
      <button onClick={onHandleDecrease} disabled={play} id={idDecrement}>
        Decrease
      </button>
      <button onClick={onHandleIncrease} disabled={play} id={idIncrement}>
        Increase
      </button>
    </div>
  );
};

export default Timer;

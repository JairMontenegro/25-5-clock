import React from "react";
import "../scss/timer.scss";

const Timer = (props) => {
  const {
    onHandleDecrease,
    onHandleIncrease,
    length,
    disabled,
    nameTimer,
    idLabel,
    idLength,
    idDecrement,
    idIncrement,
  } = props;
  return (
    <div className="handler">
      <h3 id={idLabel}>{nameTimer}</h3>
      <div id={idLength}>{length}</div>
      <div className="buttons">
        <button disabled={disabled} onClick={onHandleDecrease} id={idDecrement}>
          DOWN
        </button>
        <button disabled={disabled} onClick={onHandleIncrease} id={idIncrement}>
          UP
        </button>
      </div>
    </div>
  );
};

export default Timer;

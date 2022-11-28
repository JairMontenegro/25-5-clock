import React from "react";

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
    <div>
      <h3 id={idLabel}>{nameTimer}</h3>
      <div id={idLength}>{length}</div>
      <button disabled={disabled} onClick={onHandleDecrease} id={idDecrement}>
        Decrease
      </button>
      <button disabled={disabled} onClick={onHandleIncrease} id={idIncrement}>
        Increase
      </button>
    </div>
  );
};

export default Timer;

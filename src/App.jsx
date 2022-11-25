import { useState } from "react";
import Timer from "./components/timer";
import "./App.scss";

function App() {
  const [breakLength, setBreakLenght] = useState(5);
  const [session, setSession] = useState(25);

  const timerLeft = () => {
    console.log("hello world");
  };

  const handleStartStop = () => {
    console.log("Hello start stop");
  };

  const handleReset = () => {
    console.log("hello reset ");
  };

  return (
    <div className="App">
      <div className="container">
        <Timer
          idLabel="break-label"
          idLength="break-length"
          idDecrement="break-decrement"
          idIncrement="break-increment"
          nameTimer="BREAK LENGTH"
          length={breakLength}
        />

        <Timer
          idLabel="session-label"
          idLength="session-length"
          idDecrement="session-decrement"
          idIncrement="session-increment"
          nameTimer="SESSION LENGHT"
          length={session}
        />

        <div id="timer-label">SESSION</div>
        <div id="timer-left">{timerLeft()}</div>
        <button id="start_stop" onClick={handleStartStop}>
          Start/Stop
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

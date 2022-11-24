import { useState } from "react";
import Timer from "./components/timer";
import "./App.scss";

function App() {
  const [breakLength, setBreakLenght] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(25.0);

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
        <div id="timer-left">{timer}</div>
        <button id="start_stop">start/stop</button>
        <button id="reset">reset</button>
      </div>
    </div>
  );
}

export default App;

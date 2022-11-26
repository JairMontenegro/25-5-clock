import { useState } from "react";
import Timer from "./components/timer";
import "./App.scss";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [session, setSession] = useState(25);
  const [play, setPlay] = useState(false);
  const [type, setType] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(1500);

  const timer = () => {
    const conversionMinutes = Math.floor(timeLeft / 60);
    const conversionSeconds = timeLeft - conversionMinutes * 60;
    const formattedSeconds =
      conversionSeconds < 10 ? "0" + conversionSeconds : conversionSeconds;
    const formattedMinutes =
      conversionMinutes < 10 ? "0" + conversionMinutes : conversionMinutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStartStop = () => {
    console.log("Hello start stop");
  };

  const handleReset = () => {
    console.log("hello reset ");
  };

  const status = type === "Session" ? "Session" : "Break";

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

        <div id="timer-label">{type}</div>
        <div id="timer-left">{timer()}</div>
        <button id="start_stop" onClick={handleStartStop}>
          Start/Stop
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    </div>
  );
}

export default App;

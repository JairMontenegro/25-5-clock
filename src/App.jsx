import { useEffect, useState } from "react";
import Timer from "./components/timer";
import "./App.scss";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [session, setSession] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [type, setType] = useState("SESSION");

  const [play, setPlay] = useState(false);

  const regressCounter = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };
  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };
  const handleSessionIncrease = () => {
    if (session < 60) {
      setSession(session + 1);
      setTimeLeft(timeLeft + 60);
    }
  };
  const handleSessionDecrease = () => {
    if (session > 1) {
      setSession(session - 1);
      setTimeLeft(timeLeft - 60);
    }
  };

  const handleReset = () => {
    clearTimeout(regressCounter);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSession(25);
    setType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  const handleStartStop = () => {
    clearTimeout(regressCounter);
    setPlay(!play);
  };

  const reset = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && type === "SESSION") {
      setTimeLeft(breakLength * 60);
      setType("BREAK");
      audio.play();
    }
    if (!timeLeft && type === "BREAK") {
      setTimeLeft(session * 60);
      setType("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const check = () => {
    if (play) {
      regressCounter;
      reset();
    } else {
      clearTimeout(regressCounter);
    }
  };

  useEffect(() => {
    check();
  }, [play, timeLeft, regressCounter]);

  const timer = () => {
    const conversionMinutes = Math.floor(timeLeft / 60);
    const conversionSeconds = timeLeft - conversionMinutes * 60;
    const formattedSeconds =
      conversionSeconds < 10 ? "0" + conversionSeconds : conversionSeconds;
    const formattedMinutes =
      conversionMinutes < 10 ? "0" + conversionMinutes : conversionMinutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const status = type === "SESSION" ? "SESSION" : "BREAK";

  return (
    <div className="App">
      <div className="container">
        <h2>25 + 5 / POMODORO TECHNIQUE</h2>
        <p>
          The Pomodoro Technique sounds basic, but it really works. You set a
          timer for 25 minutes, work until it's up, then take a 5-minute
          break—and repeat the whole process three more times. After that, you
          take a 15- to 30-minute break, depending on how you feel. That's one
          full Pomodoro cycle.
        </p>
        <Timer
          idLabel="break-label"
          idLength="break-length"
          idDecrement="break-decrement"
          idIncrement="break-increment"
          nameTimer="BREAK LENGTH"
          length={breakLength}
          onHandleDecrease={handleBreakDecrease}
          onHandleIncrease={handleBreakIncrease}
          disabled={play}
        />

        <Timer
          idLabel="session-label"
          idLength="session-length"
          idDecrement="session-decrement"
          idIncrement="session-increment"
          nameTimer="SESSION LENGHT"
          length={session}
          onHandleDecrease={handleSessionDecrease}
          onHandleIncrease={handleSessionIncrease}
          disabled={play}
        />

        <div id="timer-label">{status}</div>
        <div id="time-left">{timer()}</div>
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


import "./App.css"
import { createEffect, createSignal, For, onCleanup } from "solid-js";
import Countdown from './countdown';

function App() {
  const [now, setNow] = createSignal(Date.now());
  const [wave, setWave] = createSignal(0);

  const timer = setInterval(() => {
    setNow(Date.now());
  }, 1);

  const waveTimer = setInterval(() => {
    setWave((wave()+1)%15);
  }, 50)

  onCleanup(() => {
    clearInterval(timer)
    clearInterval(waveTimer);
  });
  
  // date format: DD Mon YEAR HH:MM:SS GMT

  createEffect(() => {
    console.log(wave());
  })

  return (
    <div className="App">
      <div className="header">
        {
          "Exam Countdowns".split("").map((c, i) => {
            if (i === wave()) {
              return <span style={{"font-size": "1.1em", color:"red"}}>{c}</span>
            }
            return <span>{c}</span>
          })
        }
      </div>
      <div className="countdowns">
        <Countdown date="26 May 2022 13:45:00 UTC+1" now={now} title="Physics Paper 1" />
        <Countdown date="07 Jun 2022 13:45:00 UTC+1" now={now} title="Maths Paper 1" />
        <Countdown date="10 Jun 2022 13:45:00 UTC+1" now={now} title="Physics Paper 2" />
        <Countdown date="13 Jun 2022 13:45:00 UTC+1" now={now} title="Computer Science Paper 1" />
        <Countdown date="14 Jun 2022 13:45:00 UTC+1" now={now} title="Maths Paper 2" />
        <Countdown date="16 Jun 2022 09:15:00 UTC+1" now={now} title="Physics Paper 3" />
        <Countdown date="21 Jun 2022 13:45:00 UTC+1" now={now} title="Maths Paper 3" />
        <Countdown date="24 Jun 2022 09:15:00 UTC+1" now={now} title="Computer Science Paper 2" />
      </div>
    </div>
  );
}

export default App;

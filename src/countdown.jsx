import { createEffect, createSignal } from "solid-js";

function Countdown({title, date, now}) {
    const [dateString, setDateString] = createSignal("");

    createEffect(() => {
        let time = [0,0,0,0];
        let x = Date.parse(date) - now();
        if (x < 0) {
            setDateString("DONE");
            return;
        }
        let d = Math.floor(x/86400000)
        time[3] = d
        x -= d*86400000;
        let h = Math.floor(x/3600000);
        time[2] = h;
        x -= h*3600000;
        let m = Math.floor(x/60000);
        time[1] = m;
        x -= m*60000;
        let s = Math.floor(x/1000);
        time[0] = s
        setDateString(`${time[3]} days ${time[2]} hours ${time[1]} minutes ${time[0]} seconds`)
    })

    return(
        <div className="countdown">
            <h1 className="countdown-title">{title}</h1>
            <h2 className="countdown-date">{dateString()}</h2>
        </div>
    )
}

export default Countdown;
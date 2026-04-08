import useDate from "./date.jsx";
import "./today.css";

function Today(){
    const { dayName, day, monthName, year } = useDate();
    return (
        <div className="two">
            <h1>Transforming Walls into Smart Schedulers</h1>
            <h1>{year}</h1>
            <h2>{day}-{monthName}-{year} || {dayName}</h2>
        </div>
    );
}

export default Today ;
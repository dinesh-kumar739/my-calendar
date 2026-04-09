import { useState, useEffect } from "react";
import "./Work.css";

function Work() {
  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      startDate,
      endDate,
    };

    setTasks([...tasks, newTask]);

    setTask("");
    setStartDate("");
    setEndDate("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="one">
      <h1>Plan. Track. Achieve.</h1>

      <div className="head">
        <input
          type="text"
          className="enter"
          placeholder="Enter Your Task .."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button onClick={handleAdd}>Submit</button>
      </div>

      <div className="tasks">
        {tasks.map((t, index) => (
        <div key={index} className="task-item">
          <div className="left">
          <p>{t.text}</p>
        </div>
        <div className="right">
          <p>{t.startDate} → {t.endDate}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      </div>
    ))}
    </div>
    </div>
  );
}

export default Work;
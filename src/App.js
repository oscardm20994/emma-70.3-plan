import React, { useState } from "react";
import "./App.css";

const sessions = [
  {
    id: 1,
    week: 1,
    day: "Monday",
    discipline: "Swim",
    description: "2.5 km endurance swim",
  },
  {
    id: 2,
    week: 1,
    day: "Tuesday",
    discipline: "Bike",
    description: "90 min zone 2 ride with 4×5 min zone 3 efforts",
  },
  {
    id: 3,
    week: 1,
    day: "Wednesday",
    discipline: "Run",
    description: "10 km run with 3×1 km at threshold pace",
  },
  {
    id: 4,
    week: 1,
    day: "Thursday",
    discipline: "Rest",
    description: "Rest day",
  },
  {
    id: 5,
    week: 1,
    day: "Friday",
    discipline: "Swim",
    description: "Technique swim: drills and 4×200m",
  },
  {
    id: 6,
    week: 1,
    day: "Saturday",
    discipline: "Bike + Run",
    description: "Long ride 3 hrs + 30 min brick run",
  },
  {
    id: 7,
    week: 1,
    day: "Sunday",
    discipline: "Run",
    description: "90 min long run at easy pace",
  },
];

function App() {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const progress = Math.round((completed.length / sessions.length) * 100);

  return (
    <div className="container">
      <h1>Emma 70.3 Training Plan – Week 1</h1>

      <div className="progress-container">
        <label>Progress:</label>
        <progress value={completed.length} max={sessions.length} />
        <span>{progress}% complete</span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Discipline</th>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.day}</td>
              <td>{session.discipline}</td>
              <td>{session.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={completed.includes(session.id)}
                  onChange={() => toggleComplete(session.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


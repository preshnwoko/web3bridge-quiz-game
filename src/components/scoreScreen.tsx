import { useState } from "react";

type Props = {
  score: number;
  total: number;
};

export default function ScoreScreen({ score, total }: Props) {
  const [name, setName] = useState("");

  function handleRestart() {
    window.location.reload(); // quick reset for demo
  }

  function handleSave() {
    if (!name.trim()) return alert("Enter a name!");
    const existing = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    existing.push({ name, score, date: new Date().toISOString() });
    localStorage.setItem("leaderboard", JSON.stringify(existing));
    alert("Saved!");
  }

  return (
    <div className="score-screen">
      <h2>Game Over 🎉</h2>
      <p>
        You scored {score} out of {total}
      </p>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="btns">
        <button onClick={handleSave}>Save to Leaderboard</button>
        <button onClick={handleRestart}>Play Again</button>
      </div>
    </div>
  );
}

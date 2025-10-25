import { useState } from "react";
import { toast } from "react-toastify";
import Leaderboard from "./leaderboard";

type Props = {
  score: number;
  total: number;
};

export default function ScoreScreen({ score, total }: Props) {
  const [name, setName] = useState("");

  const [seeLeaderboard, setSeeLeaderboard] = useState(false);

  function handleRestart() {
    window.location.reload();
  }

  function handleSave() {
    if (!name.trim()) return toast.error("Enter a name!");
    const existing = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    existing.push({ name, score, date: new Date().toISOString() });
    localStorage.setItem("leaderboard", JSON.stringify(existing));
    toast.success("Saved!");
    setTimeout(() => {
      window.location.reload();
    }, 500);
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
        style={{
          padding: "10px",
          border: "1px solid lightgrey",
          fontSize: "15px",
          marginBottom: 20,
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="btns">
        <button onClick={handleSave}>Save to Leaderboard</button>
        <button onClick={handleRestart}>Play Again</button>
        <button onClick={() => setSeeLeaderboard(!seeLeaderboard)}>
          {seeLeaderboard ? "Close Leaderboard" : "View Leaderboard"}
        </button>
      </div>
      {seeLeaderboard && <Leaderboard />}
    </div>
  );
}

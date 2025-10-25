import React from "react";

type Entry = { name: string; score: number; date: string };

export default function Leaderboard() {
  const list: Entry[] = JSON.parse(localStorage.getItem("leaderboard") || "[]")
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
    .slice(0, 10);

  if (list.length === 0) return <p>No scores yet.</p>;

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      <ol>
        {list.map((e, i) => (
          <li key={i}>
            {e.name} – {e.score}
          </li>
        ))}
      </ol>
    </div>
  );
}

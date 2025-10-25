import { useEffect, useState } from "react";
import QuestionCard from "./questionCard";
import ScoreScreen from "./scoreScreen";
import useFetchQuestions from "../hook/fetchQuestions";

export default function Quiz() {
  const { loading, error, questions } = useFetchQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswer(index: number) {
    if (showFeedback) return; // ignore double-clicks
    setSelectedIndex(index);
    setShowFeedback(true);
    if (index === questions?.[currentIndex].answerIndex) {
      setScore((s) => s + 1);
    }
    // advance after short delay
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedIndex(null);
      setCurrentIndex((i) => i + 1);
    }, 900);
  }

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error}</p>;
  if (questions?.length === 0) return <p>No questions available.</p>;

  // end of quiz
  if (currentIndex >= questions?.length) {
    return <ScoreScreen score={score} total={questions?.length} />;
  }

  const current = questions?.[currentIndex];

  return (
    <div className="quiz">
      {
        <QuestionCard
          question={current}
          onAnswer={handleAnswer}
          selectedIndex={selectedIndex}
          showFeedback={showFeedback}
        />
      }
    </div>
  );
}

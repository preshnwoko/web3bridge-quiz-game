import { useEffect, useState } from "react";
import QuestionCard from "./questionCard";
import ScoreScreen from "./scoreScreen";
import useFetchQuestions from "../hook/fetchQuestions";
import { toast } from "react-toastify";

export default function Quiz() {
  const { loading, error, questions } = useFetchQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  // timer logic
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    if (showFeedback) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setShowFeedback(true);
          setTimeout(() => {
            setShowFeedback(false);
            setSelectedIndex(null);
            setCurrentIndex((i) => i + 1);
            setTimeLeft(20);
          }, 900);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, showFeedback]);

  const handleAnswer = (index: number) => {
    // ignore double-clicks
    if (showFeedback) return;
    setSelectedIndex(index);
    setShowFeedback(true);

    //reset timer when you answer
    setTimeLeft(20);

    if (index === questions?.[currentIndex].answerIndex) {
      setScore((s) => s + 1);
      toast.success("Correct!");
    } else {
      toast.error("Incorrect!");
    }
    // advance after short delay
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedIndex(null);
      setCurrentIndex((i) => i + 1);
    }, 900);
  };

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
      <p>⏰ Time Left: {timeLeft}s</p>
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

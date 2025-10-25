import type { Question } from "../types";

type Props = {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  showFeedback?: boolean;
  selectedIndex?: number | null;
  disabled?: boolean;
};

export default function QuestionCard({
  question,
  onAnswer,
  showFeedback = false,
  selectedIndex = null,
  disabled = false,
}: Props) {
  return (
    <div className="card">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="options">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          // feedback styles:
          const isCorrect = showFeedback && idx === question.answerIndex;
          const isWrong =
            showFeedback && isSelected && idx !== question.answerIndex;

          const className = [
            "option-btn",
            isSelected ? "selected" : "",
            isCorrect ? "correct" : "",
            isWrong ? "wrong" : "",
          ].join(" ");

          return (
            <button
              key={idx}
              className={className}
              onClick={() => !disabled && onAnswer(idx)}
              disabled={disabled}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

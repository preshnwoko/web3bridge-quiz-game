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
  disabled = false,
}: Props) {
  return (
    <div className="card">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="options">
        {question.options.map((option, idx) => {
          return (
            <button
              key={idx}
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

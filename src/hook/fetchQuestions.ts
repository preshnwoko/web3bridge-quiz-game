import { useEffect, useState } from "react";
import type { Question } from "../types";

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/questions.json")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load questions");
        return r.json();
      })
      .then((data: Question[]) => {
        const valid = data.filter(
          (q) =>
            q &&
            typeof q.question === "string" &&
            Array.isArray(q.options) &&
            q.options.length > q.answerIndex
        );
        setQuestions(valid);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { questions, error, loading };
};

export default useFetchQuestions;

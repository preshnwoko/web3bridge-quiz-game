import { useEffect, useState } from "react";
import type { Question } from "../types";

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/questions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load questions");
        return res.json();
      })
      .then((q: Question[]) => setQuestions(q))
      .catch((err) => setError(err.message));
  }, []);

  return { questions, error };
};

export default useFetchQuestions;

export type Question = {
  id: string;
  topic?: string;
  question: string;
  options: string[];
  answerIndex: number;
};

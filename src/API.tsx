

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${Difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json(); // convert to json
  console.log(data);
};

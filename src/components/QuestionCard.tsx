import React from "react";

type props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: boolean;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{  __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default QuestionCard;

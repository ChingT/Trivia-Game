import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

Array.prototype.shuffle = function () {
  this.sort(() => 0.5 - Math.random());
};

export default function QuestionDetail() {
  const questions = useSelector((state) => state.questions.questions);
  const { questionNr } = useParams();
  const question = questions[questionNr];

  const navigate = useNavigate();
  useEffect(() => {
    if (!question) {
      navigate("/questions/1");
    }
  }, [question]);

  if (!question) return <>Loading the first question....</>;

  const options = [question.correct_answer, ...question.incorrect_answers];
  options.shuffle();

  const renderQuestion = () => (
    <div className="question">
      <h3 className="title">{question.question}</h3>
      <div className="options">
        {options.map((option) => (
          <div key={option}>{option}</div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <h2>Question</h2>
      {renderQuestion()}
    </>
  );
}

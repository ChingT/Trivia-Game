import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Result() {
  useEffect(() => {
    document.title = "Result - Trivia Game";
  });

  const numberOfQuestions = useSelector(
    (state) => state.questions.numberOfQuestions
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!numberOfQuestions) {
      navigate("/");
    }
  }, [navigate, numberOfQuestions]);

  const questions = useSelector((state) => state.questions.questions);
  const answers = useSelector((state) => state.questions.answers);

  const getInfo = (questionNr) => {
    const correctAnswer = questions[questionNr].correct_answer;
    const question = questions[questionNr].question;
    const selectedAnswer = answers[questionNr];
    const correct = correctAnswer === selectedAnswer;
    return { question, correctAnswer, selectedAnswer, correct };
  };

  const countPoints = () =>
    Object.keys(questions).filter((questionNr) => getInfo(questionNr).correct)
      .length;

  const renderResults = () =>
    Object.keys(questions).map((questionNr) => {
      const { question, correctAnswer, selectedAnswer, correct } =
        getInfo(questionNr);
      return (
        <div key={questionNr} className="result">
          <h3>
            {questionNr}. {question}
          </h3>
          <div className="answers">
            <div>
              <div>Selected answer:</div>
              <p dangerouslySetInnerHTML={{ __html: selectedAnswer }} />
            </div>
            <div>
              <div>Correct answer:</div>
              <p dangerouslySetInnerHTML={{ __html: correctAnswer }} />
            </div>
          </div>
          <div className="icon-section">
            <div className="correct-icon">
              {correct ? <IoIosCheckmarkCircleOutline /> : undefined}
            </div>
          </div>
        </div>
      );
    });
  const points = countPoints();
  return (
    <main id="result">
      <h1>Result</h1>
      <h2 className="points">
        Score: {points} / {numberOfQuestions}
      </h2>
      <div className="results">{renderResults()}</div>
    </main>
  );
}

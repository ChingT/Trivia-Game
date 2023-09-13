import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Radio } from "../components/Radio";
import { saveAnswer } from "../store/slices/questions";

export default function QuestionDetail() {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.questions.questions);
  const allOptions = useSelector((state) => state.questions.options);
  const answers = useSelector((state) => state.questions.answers);
  const numberOfQuestions = useSelector(
    (state) => state.questions.numberOfQuestions
  );

  const { questionNr } = useParams();
  const question = questions[questionNr];
  const options = allOptions[questionNr];

  const navigate = useNavigate();
  useEffect(() => {
    if (!question) {
      navigate("/");
    }
  }, [navigate, question]);

  if (!question) return <>Loading the first question....</>;

  const name = "question";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      questionNr == numberOfQuestions
        ? "/result"
        : `/questions/${Number(questionNr) + 1}`
    );
  };

  const handleClick = (e) => {
    const answer = e.target.value;
    dispatch(saveAnswer([questionNr, answer]));
  };

  const renderOptions = () => (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <Radio
            key={option}
            name={name}
            value={option}
            handleClick={handleClick}
            defaultChecked={answers[questionNr] === option}
          />
        ))}
        <button className="next-button" type="submit">
          {questionNr == numberOfQuestions ? "Checkout Result" : "Next"}
        </button>
      </form>
    </div>
  );
  return (
    <main id="question">
      <h2>Question {questionNr}</h2>
      <div className="question">
        <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
        <div className="options">{renderOptions()}</div>
      </div>
    </main>
  );
}

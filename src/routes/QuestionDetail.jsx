import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Radio } from "../components/Radio";
import { saveAnswer } from "../store/slices/questions";

export default function QuestionDetail() {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.questions.questions);
  const allOptions = useSelector((state) => state.questions.options);
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
    const formData = new FormData(e.target);
    const answer = formData.get(name);
    dispatch(saveAnswer([questionNr, answer]));
    if (Number(questionNr) < Object.values(questions).length) {
      navigate(`/questions/${Number(questionNr) + 1}`);
    } else {
      navigate(`/result`);
    }
  };

  const renderOptions = () => (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <Radio
            key={option}
            name={name}
            value={option}
            defaultChecked={false}
          />
        ))}
        <button className="next-button" type="submit">
          Next
        </button>
      </form>
    </div>
  );

  return (
    <main id="question">
      <h2>Question</h2>
      <div className="question">
        <h3 className="title">{question.question}</h3>
        <div className="options">{renderOptions()}</div>
      </div>
    </main>
  );
}

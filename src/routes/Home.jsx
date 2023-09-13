import { useSelector, useDispatch } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { loadQuestions } from "../store/slices/questions";
import { useEffect } from "react";
import { setOptions } from "../store/slices/questions";

Array.prototype.shuffle = function () {
  this.sort(() => 0.5 - Math.random());
};

export default function Home() {
  useEffect(() => {
    document.title = "Home - Trivia Game";
  });

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  useEffect(() => {
    const fetchquestions = async (num = 10) => {
      try {
        const res = await fetch(`https://opentdb.com/api.php?amount=${num}`);
        const data = await res.json();
        dispatch(loadQuestions(data.results));
      } catch (e) {
        console.log(e);
        return redirect("/");
      }
    };

    fetchquestions();
  }, [dispatch]);

  useEffect(() => {
    if (!questions) return;
    Object.entries(questions).forEach(([questionNr, question]) => {
      const options = [question.correct_answer, ...question.incorrect_answers];
      options.shuffle();
      dispatch(setOptions([questionNr, options]));
    });
  }, [dispatch, questions]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questions/1");
  };

  return (
    <main id="home">
      <h1>Welcome to Trivia Game</h1>
      <button onClick={handleClick}>Start Quiz</button>
    </main>
  );
}

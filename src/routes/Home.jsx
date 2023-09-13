import { useDispatch } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import { loadQuestions } from "../store/slices/questions";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Trivia Game";
  });

  const dispatch = useDispatch();
  const fetchquestions = async (num = 10, questionType = "multiple") => {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${num}&type=${questionType}`
      );
      const data = await res.json();
      dispatch(loadQuestions(data.results));
    } catch (e) {
      console.log(e);
      return redirect("/");
    }
  };

  useEffect(() => {
    fetchquestions();
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questions/1");
  };

  return (
    <main id="home">
      <h1>Welcome to Trivia Game</h1>
      <button onClick={handleClick}>Start</button>
    </main>
  );
}

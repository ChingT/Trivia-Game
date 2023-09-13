import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { loadQuestions } from "../store/slices/questions";

export default function Questions() {
  useEffect(() => {
    document.title = "Questions - Trivia Game";
  });

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  const fetchquestions = async (num = 10, questionType = "multiple") => {
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${num}&type=${questionType}`
      );
      const data = await res.json();
      dispatch(loadQuestions(data.results));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchquestions();
  }, []);

  const renderquestions = () => {
    if (!questions) return <></>;
    return Object.keys(questions).map((id) => (
      <NavLink to={`/questions/${id} `} key={id}>
        {id}
      </NavLink>
    ));
  };

  return (
    <div id="questions">
      <aside>
        <div>Questions</div>
        {renderquestions()}
      </aside>
      <Outlet />
    </div>
  );
}

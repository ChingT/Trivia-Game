import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const questions = useSelector((state) => state.questions.questions);

  const renderquestions = () => {
    if (!questions) return <></>;
    return Object.keys(questions).map((id) => (
      <NavLink to={`/questions/${id} `} key={id}>
        {id}
      </NavLink>
    ));
  };

  return (
    <footer>
      <div>
        Questions
        {renderquestions()}
      </div>
    </footer>
  );
}

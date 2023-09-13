import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const questions = useSelector((state) => state.questions.questions);

  const renderquestions = () => {
    if (!questions) return <></>;
    return Object.keys(questions).map((id) => {
      const path = `/questions/${id}`;

      return (
        <NavLink to={path} key={id}>
          {id}
        </NavLink>
      );
    });
  };

  return (
    <aside>
      <NavLink to="/" id="restart">
        Restart
      </NavLink>
      {renderquestions()}
    </aside>
  );
}

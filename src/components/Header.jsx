import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/questions">Restart game</NavLink>
      <NavLink to="/result">Result</NavLink>
    </header>
  );
}

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink className="logo" to="/">
        John Doe Ltd.
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
}

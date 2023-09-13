import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav id="breadcrumb">
      {parts.map((part, index) => {
        const path = "/" + parts.slice(0, index + 1).join("/");
        return (
          <Fragment key={path}>
            {" > "}
            <Link to={path}>{part}</Link>
          </Fragment>
        );
      })}
    </nav>
  );
}
